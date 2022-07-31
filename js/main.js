$(document).ready(function(){
    

    
    

    $(window).resize(function(){
        const widthWind=$(window).width();
        console.log(widthWind);
        if (widthWind>767) {
            if($(".headNav").hasClass("burgerActive")){
                $(".burgerIc").trigger("click");
            }
        }
        
    })

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
        $(".slideImg3").css("transform", "translate(-10px, 0)");
        $(".aboutText").slideDown(1500);
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
        $(".headNav").css("transform", "translate(0, 0)");
        

        
        //*************Крестик********************** */
        $('.bI1').toggleClass('bIactive1');
        $('.bI3').toggleClass('bIactive2');
        $('.bI2').toggleClass('bIactive3');
        //********************************** */
    })
    })
    