const body = document.querySelector('body');

body.classList.add('disable-hover');

if (navigator.userAgent.indexOf('Firefox') === -1) {
    setTimeout(function() {
    body.classList.remove('disable-hover');
    }, 7000);

} else {
    setTimeout(function() {
        body.classList.remove('disable-hover');
        }, 2500);

    }