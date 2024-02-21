jQuery(document).ready(function(){
    var initTopPosition= jQuery('#myHeader').offset().top;   
    jQuery(window).scroll(function(){
        if(jQuery(window).scrollTop() > initTopPosition)
            jQuery('#myHeader').addClass('fixedDiv');
        else

            jQuery('#myHeader').removeClass('fixedDiv');
    });
    
    jQuery('.dropbtnf').click(function(){
        jQuery(this).next('.dropdown-contentf').toggleClass('showfooter');
        jQuery(this).toggleClass('open');
    })
     jQuery('.dropbtn').click(function(){
        jQuery(this).next('.dropdown-content').toggle();
        jQuery(this).toggleClass('open');
    })
        
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-157509634-1');


var position = $(window).scrollTop(); 
var mybutton = $("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
        var scroll = $(window).scrollTop();

    if(scroll < position) {
    $("#myBtn").show();
  } else {
    $("#myBtn").hide();
  }
  position = scroll;
}

$('#cText').keyup(function () {
  max = this.getAttribute("maxlength");
  var len = $(this).val().length;
  if (len >= max) {
    $('#charNum').text('You have reached the limit');
  } else {
    var char = max - len;
    $('#charNum').text(char + ' characters left');
  }
});



 
 })
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myfunc(mydata){
    if(mydata != 0){
        $('.myall').hide();
        $('.'+mydata).show();
    }
    else {
        $('.myall').show();
    }
}
function myfunc1(mydata){
        if(mydata != 0){
            $('.myall1').hide();
            $('.'+mydata).show();
        }
        else {
            $('.myall1').show();
        }
    }

jQuery(function($) {
    jQuery(document).ready(function(){     
        //carousal slider home
        $('.responsive').slick({
          dots: true,
        	prevArrow: $('.prev'),
        	nextArrow: $('.next'),
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    });
});
        