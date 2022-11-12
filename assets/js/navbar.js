function openNav() {
    document.querySelector('#sidebar-menu').style.display = 'block';
    document.querySelector('#sidebar-menu').classList.add('menu-navbar');
}

function closeNav() {
    document.querySelector('#sidebar-menu').classList.remove('menu-navbar');
    document.querySelector('#sidebar-menu').style.display = 'none';
}

let closeMenu = document.querySelector('.js-closeMenu');
let menuContainer = document.querySelector('.js-closeMenu-container');

closeMenu.addEventListener('click', closeNav);
menuContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

var menuItems = document.querySelectorAll('.item-sidebar > p > a')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        document.querySelector('#sidebar-menu').classList.remove('menu-navbar');
        document.querySelector('#sidebar-menu').style.display = 'none';

    }
}