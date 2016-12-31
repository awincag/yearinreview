var menuButton = document.getElementById('menu-nav');
var closeMenu = document.getElementById('close-menu');
var menu = document.getElementById('menu');

var body = document.body;

menuButton.addEventListener('click', function (e) {
    menu.classList.add('active');
    body.classList.add('body-height-fixed');
    content.classList.add('content-height-fixed');
    e.preventDefault();
});

closeMenu.addEventListener('click', function (e) {
    menu.classList.remove('active');
    body.classList.remove('body-height-fixed');
    content.classList.remove('content-height-fixed');
    e.preventDefault();
});
