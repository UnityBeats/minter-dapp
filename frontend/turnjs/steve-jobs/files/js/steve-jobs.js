function updateDepth(book, newPage) {

	var page = book.turn('page'),
		pages = book.turn('pages'),
		depthWidth = 16*Math.min(1, page*2/pages);

		newPage = newPage || page;

	if (newPage>3)
		$('.sj-book .p2 .depth').css({
			width: depthWidth,
			left: 20 - depthWidth
		});
	else
		$('.sj-book .p2 .depth').css({width: 0});

		depthWidth = 16*Math.min(1, (pages-page)*2/pages);

	if (newPage<pages-3)
		$('.sj-book .p41 .depth').css({                      //change p# to (total pages + 4) minus 1
			width: depthWidth,
			right: 20 - depthWidth
		});
	else
		$('.sj-book .p41 .depth').css({width: 0});           //change p# to (total pages + 4) minus 1

}

function loadPage(page) {



	if (page != 5) {
		var img = $('<img />');
		img.load(function() {
			var container = $('.sj-book .p'+page);
			img.css({width: container.width(), height: container.height()});
			img.appendTo($('.sj-book .p'+page));
			container.find('.loader').remove();
		});

		img.attr('src', 'files/pages/' +  (page-2) + '.png');
	}
}

function addPage(page, book) {

	var id, pages = book.turn('pages');

	if (!book.turn('hasPage', page)) {

		if (page == 5) {
			var width = $(window).width() < 480 ? (window.innerWidth * 0.95) : 460;
  			var height = $(window).height() < 768 ? (window.innerHeight * 0.95) : 682;
			var element = $('<div />', {
			  'class': 'own-size',
			  css: {width: width, height: height}
			}).html('<div class="table-of-contents-container"></div>');
		  
			// Load the HTML file and append it to the div
			element.find('.table-of-contents-container').load('files/pages/my-table-of-contents.html');
		  }
		if (page != 5) {
			var width = $(window).width() < 480 ? (window.innerWidth * 0.95) : 460;
  			var height = $(window).height() < 768 ? (window.innerHeight * 0.95) : 682;
			var element = $('<div />', {
			  'class': 'own-size',
			  css: {width: width, height: height}
			}).html('<div class="gradient"></div><div class="loader"></div>');
		}

		if (book.turn('addPage', element, page)) {
			loadPage(page);
		}
	}
}

function numberOfViews(book) {

	return book.turn('pages') / 2 + 1;

}

function getViewNumber(book, page) {

	return parseInt((page || book.turn('page'))/2 + 1, 10);

}

function zoomHandle(e) {
    if ($('.sj-book').data().zoomIn)
		zoomOut();
	else if (e.target && !$(e.target).hasClass('sj-book')) {
		zoomThis();
	}
}

function zoomThis() {
    var tmpContainer = $('<div />', {'class': 'zoom-pic'}),
        transitionEnd = $.cssTransitionEnd(),
        zCenterX = $('#book-zoom').width()/2,
        zCenterY = $('#book-zoom').height()/2,
        bookPos = $('#book-zoom').offset(),
        completeTransition = function() {
            $('#book-zoom').unbind(transitionEnd);
            if ($('.sj-book').data().zoomIn) {
                tmpContainer.appendTo($('body'));
                $('body').css({'overflow': 'hidden'});

            }
        };

    $('.sj-book').data().zoomIn = true;
    $(window).resize(zoomOut);
    tmpContainer.click(zoomOut);

	addDragListeners();

	$('.samples .bar').css({visibility: 'hidden'});
	$('#slider-bar').hide();
	$('#header').hide();
	$('.small-screen-menu').css({visibility: 'hidden'});
	$('.top-nav').css({visibility: 'hidden'});
	$('.exitfs').css('display', 'block');
    
    var position = {
        top: ($(window).height() - $('#book-zoom').height()) / 2,
    	left: ($(window).width() - $('#book-zoom').width()) / 2
    };
    
    $('#book-zoom').transform(
        'translate('+position.left+'px, '+position.top+'px)' +
        'scale(2, 2)');
	     
    if (transitionEnd) {
        $('#book-zoom').bind(transitionEnd, completeTransition);
    } else {
        setTimeout(completeTransition, 1000);
    }
}

function zoomOut() {

	var transitionEnd = $.cssTransitionEnd(),
		completeTransition = function(e) {
			$('#book-zoom').unbind(transitionEnd);
			$('body').css({'overflow': 'auto'});
			moveBar(false);
		};

	$('.sj-book').data().zoomIn = false;

	removeDragListeners();

	$('#header').show();
	$('.small-screen-menu').css({visibility: 'visible'});
	$('.top-nav').css({visibility: 'visible'});

	$(window).unbind('resize', zoomOut);

	moveBar(true);

	$('.zoom-pic').remove();
	$('#book-zoom').transform('scale(1, 1)');
	$('.samples .bar').css({visibility: 'visible'});
	$('#slider-bar').show();
	$('.exitfs').css('display', 'none');

	if (transitionEnd)
		$('#book-zoom').bind(transitionEnd, completeTransition);
	else
		setTimeout(completeTransition, 1000);
}

function addDragListeners() {
	var clicked = false, clickY;
	var clickX;
	var dragMe = document.querySelector("#book-zoom");
	dragMe.style.position = 'absolute';
  	var offset = getPosition(dragMe);
 	var offsetX = offset.x;
  	var offsetY = offset.y;
  	var xPosition = 0, yPosition = 0;

  dragMe.addEventListener("mousedown", function(e) {
    clicked = true;
    xPosition = dragMe.offsetLeft;
    yPosition = dragMe.offsetTop;
    clickY = e.pageY - yPosition;
    clickX = e.pageX - xPosition;
  });

  document.addEventListener("mouseup", function() {
    clicked = false;
  });

  document.addEventListener("mousemove", function(e) {
  if (clicked) {
    var newTop = e.pageY - clickY;
    var newLeft = e.pageX - clickX;

    dragMe.style.top = newTop + "px";
    dragMe.style.left = newLeft + "px";
  }
});
}

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
}

function removeDragListeners() {
    $('#book-zoom').off('mousedown');
    $('#book-zoom').off('mousemove');
    $('#book-zoom').off('mouseup');
	$('#book-zoom').css('position', '');
}

function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 1000});
	}
}

function setPreview(view) {

	var previewWidth = 115,
		previewHeight = 73,
		previewSrc = 'files/pages/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
}

function isChrome() {

	// Chrome's unsolved bug
	// http://code.google.com/p/chromium/issues/detail?id=128488

	return navigator.userAgent.indexOf('Chrome')!=-1;

}