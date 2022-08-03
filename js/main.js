$(document).ready(function(){
    

    let anchors=document.querySelectorAll('a[href*="#"]');
    for(anchor of anchors){
        if (anchor) {
            anchor.addEventListener("click", function(e){
                e.preventDefault();
                anchorId= this.getAttribute('href');
                document.querySelector(anchorId).scrollIntoView({
                    behavior: 'smooth',
                    block:'start'
                })
            })
        }
    }
    
    

    $(window).resize(function(){
        const widthWind=$(window).width();
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
        $(".slideImg3").css("transform", "translate(0, 0)");
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



        $(".slider").slick({
            dots:true,
            speed:500,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:true,
            waitForAnimate:false,
            adaptiveHeight:true
            
        });
    })
    