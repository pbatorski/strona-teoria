var frameTop = $('.tlo-1').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= frameTop) {           // apply position: fixed if you
        $('.tlo-1').css({                      // scroll to that element or below it
            'position': 'fixed',
            'top': '0vh',
            'left': '0',
            'width': '100vw',
        }),
            $('.konferencja').css({
             'margin-top': '30vh',
        });
    } else {                                  // apply position: static
            $('.tlo-1').css({
                'position': 'relative',
           }),
          $('.konferencja').css({
            'margin-top':'-70vh',
            });
    }

});
/*
var insideOneTop = $('.panels-details').offset().top;

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

if (currentScroll >= insideOneTop) {
        $('.tlo-1').css({
                'position': 'absolute',
                'top':'0px',
                'left':'0px',
        }),
                $('.panel').css({
                'margin-top': '0vh',
        });
} else {
} 
});

*/
//przesuwanie strony z konferencją
/*var frameTop = $('.tlo-1').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= frameTop) {           // apply position: fixed if you
        $('.tlo-1').css({                      // scroll to that element or below it
            'position': 'fixed',
            'top': '0vh',
            'left': '0',
            'width': '100vw',
        }),
            $('.konferencja').css({
            'margin-top': '30vh',
        });
    } else {                                  // apply position: static
            $('.tlo-1').css({
                'position': 'relative',
            }),
            $('.konferencja').css({
                'margin-top':'-70vh',
            });
    }

});

var insideOneTop = $('.panels-details').offset().top;

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

if (currentScroll >= insideOneTop) {
        $('.tlo-1').css({
                'position': 'absolute',
                'top':'0px',
                'left':'0px',
        }),
                $('.panel').css({
                'margin-top': '0vh',
        });
} else {
} 
});
*/
//koniec przesuwania strony z konferencją


var fixmeTop = $('.intro-nav').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.intro-nav').addClass('fixme'),
        $('.kafel-link-neutral').addClass('kafel-link2'),
        $('.kafel-link-neutral').removeClass('kafel-link1'),
        $('.intro-kafel').addClass('intro-kafel2'),
        $('.cookies').css({
                'top': '13vh',
        });
    } else {                                   // apply position: static
        $('.intro-nav').removeClass('fixme'),
        $('.kafel-link-neutral').removeClass('kafel-link2'),
        $('.kafel-link-neutral').addClass('kafel-link1'),
        $('.intro-kafel').removeClass('intro-kafel2'),
        $('.cookies').css({
                'top': '0px',
        });
    }

});
/*
var fixmeTopTwo = $('.hiddentitle').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScrollTwo = $(window).scrollTop(); // get current position

    if (currentScrollTwo >= fixmeTopTwo) {           // apply position: fixed if you
        $('.hiddentitle').css({                      // scroll to that element or below it
            'position': 'fixed',
            'visibility': 'visible',
            'top': '0',
            'left': '0',

        });
    } else {                                   // apply position: static
        $('.hiddentitle').css({                      // if you scroll above it
            'position': 'static',
            'visibility': 'hidden'
        });
    }

});

*/
//zamykanie ciastek

$("#cookies-x").click(function() {
        $(".cookies").css({
                'display': 'none',
        })
});



//slider
$(".plan").click(function(){
       $(".konf-plan-menu").slideToggle("fast"),
       $(".konf-plan-menu").css({
            'display': 'flex',
            'dispplay': 'webkit-flex',
       });
        $(".plan-day1").css({
            'display':'none',
        });
        $(".plan-day2").css({
            'display':'none',
        });
});

$(".plan-item-1").click(function(){
        $("html, body").animate({
        scrollTop: $(".plan").offset().top
        }, 1000);
       $(".plan-day1").slideToggle("slow"),
       $(".plan-day1").css({
           'display':'block',       
        });
        $(".konferencja").css({
            'height': '120vh',
        });
        $(".plan-day2").css({
            'display':'none',
        });
        $(".motto").css({
            'display': 'none',
        });
       });

       $(".plan-item-2").click(function(){
        $("html, body").animate({
        scrollTop: $(".plan").offset().top
        }, 1000);
       $(".plan-day2").slideToggle("slow"),
       $(".plan-day2").css({
           'display':'block',       
        });
        $(".konferencja").css({
            'height': '120vh',
        });
        $(".plan-day1").css({
            'display':'none',
        });
        $(".motto").css({
            'display': 'none',
        });
       });

       $(".arrow-down").click(function(){
        $("html, body").animate({
        scrollTop: $(".welcome").offset().top
        }, 1000);
       });
        
        $("#about").click(function(){
        $("html, body").animate({
        scrollTop: $(".welcome").offset().top
        }, 1000);
       });

        $("#panelplan").click(function(){
        $("html, body").animate({
        scrollTop: $(".konferencja").offset().top
        }, 2000);
       });

        $(".panels").click(function(){
        $("html, body").animate({
        scrollTop: $(".panels-details").offset().top
        }, 2000);
       });


       $(".event").click(function(){
       $(this).next(".event-full-description").slideToggle("slow");    
        });