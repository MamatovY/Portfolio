$(".burgerIc").click(function (e) {
    e.preventDefault();
    $(".headNav").toggleClass("burgerActive");
    $("nav").toggleClass("burgerMenu");
})
