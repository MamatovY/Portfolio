$(document).ready(function(){
   

    $('.topMove').click(function(e){
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    })

    if(pageYOffset>100){
        $('.topMove').css('display','block');
    }

    window.addEventListener('scroll', function(){
       
        if (pageYOffset>1400 && pageYOffset<2200 ) {
            
        $(".slideImg1").css("transform", "translate(0, 0)");
        $(".slideImg2").css("transform", "translate(0, 0)");
        $(".slideImg3").css("transform", "translate(0, 0)");
        $(".aboutText").slideDown(2500);
        }
    


        
        if(pageYOffset>100){
            $('.topMove').css('display','block');
            
        }else{
            $('.topMove').css('display','none');
        }
        

    });


    $(".burgerIc").click(function (e) {
        e.preventDefault();
        $(".headNav").toggleClass('burgerActive');
        $("nav").toggleClass('burgerMenu');
        

        
        //*************Крестик********************** */
        $('.bI1').toggleClass('bIactive1');
        $('.bI3').toggleClass('bIactive2');
        $('.bI2').toggleClass('bIactive3');
        //********************************** */
    })
    })
    