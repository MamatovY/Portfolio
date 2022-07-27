$(document).ready(function(){

$(".burgerIc").click(function (e) {
    e.preventDefault();
    $(".headNav").slideToggle(500);


    //*************Крестик********************** */
    $('.bI1').toggleClass('bIactive1')
    $('.bI3').toggleClass('bIactive2')
    $('.bI2').toggleClass('bIactive3')
    //********************************** */
})
})
