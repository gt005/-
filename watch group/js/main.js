$(document).ready(function () {
    $('.main-page-main-carousel-section').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:true,
        items:1
    })

    $('.main-page-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        LazyLoad:true,
        responsive:{
            0:{
                items: 2
            },
            992: {
                items: 4
            }
        }
    })
});

document.querySelector('.open-mobile-menu-btn').onclick = function () {
    let subHeader = document.querySelector('.sub-header'),
        subHeaderContainer = document.querySelector('.sub-header-container'),
        closeMobileBtn = document.querySelector('.close-mobile-header-btn');

    closeMobileBtn.style.opacity = '1';
    subHeaderContainer.style.left = '0';
    subHeaderContainer.style.opacity = '1';
    subHeader.style.transform = "translateX(0%)";
}

document.querySelector('.close-mobile-header-btn').onclick = function () {
    let subHeader = document.querySelector('.sub-header'),
        subHeaderContainer = document.querySelector('.sub-header-container');

    this.style.opacity = '0';
    subHeader.style.transform = "translateX(-110%)";
    subHeaderContainer.style.opacity = '0';
    setTimeout(function () {
        subHeaderContainer.style.left = '-150%';
    }, 200)
}


let shoppingCartDropdownMobileOpened = 0;
document.querySelector('.header-shopping-cart').onclick = function () {
    if (shoppingCartDropdownMobileOpened !== 0) {
        return
    }
    let shoppingCartDropdown = document.querySelector('.shopping-cart-dropdown'),
        shoppingCartDropdownContainer = document.querySelector('.shopping-cart-dropdown-container');

    shoppingCartDropdownContainer.style.left = '0';
    shoppingCartDropdownContainer.style.opacity = '1';
    shoppingCartDropdown.style.transform = "translateX(0%)";
    document.querySelector('.shopping-cart-dropdown__close-btn').style.left = '15px';
    shoppingCartDropdownMobileOpened = 1;
}


document.querySelector('.shopping-cart-dropdown-container').onclick = function () {
    if (shoppingCartDropdownMobileOpened !== 1) {
        return
    }

    let shoppingCartDropdown = document.querySelector('.shopping-cart-dropdown');

    shoppingCartDropdown.style.transform = "";
    this.style.opacity = '0';
    document.querySelector('.shopping-cart-dropdown__close-btn').style.left = '-9999px';
    document.querySelector(".shopping-cart-dropdown-container").style.left='-9999px';
    setTimeout(function () {
        shoppingCartDropdownMobileOpened = 0;
    }, 200)
}

document.querySelector("#add_amount_object_card").onclick = function () {
    document.querySelector("#amount_object_card").value++;
}

document.querySelector("#subtract_amount_object_card").onclick = function () {
    if (document.querySelector("#amount_object_card").value > 1){
        document.querySelector("#amount_object_card").value--;
    }
}