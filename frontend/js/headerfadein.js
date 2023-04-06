const header = document.getElementById('header');
header.style.opacity = 0;

if (navigator.userAgent.indexOf('Firefox') === -1) {
    setTimeout(function() { 
        anime({
            targets: header,
            opacity: 1,
            easing: 'linear',
            duration: 2500,
        });
    }, 5000);
} else {
    anime({
        targets: header,
        opacity: 1,
        easing: 'linear',
        duration: 2500,
    });
}