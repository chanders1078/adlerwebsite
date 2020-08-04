$(document).ready(function() {
    var btn = $(".close-btn");
    $(btn).on("click", function() {
        $(btn).parent().hide();
    });
    /* Sticky Nvabar 
    */
    var stickyNavTop = $('.container-fluid').offset().top;
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
        if (scrollTop < stickyNavTop) { 
          $('.container-fluid').addClass('sticky');
        } else {
          $('.container-fluid').removeClass('sticky'); 
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
     });
     
     $("#sbtn1").on("click", function() {
        $(".solution-icon-box span").css({ "backgroundColor" : "#fdd600" , "border" : "0"});
        $(".solution-content-col1 img").attr('src','../assets/images/25-yd-dewatering-canvas-tarp.jpg');
     });
     $("#sbtn2").on("click", function() {
        $(".solution-icon-box span").css({ "backgroundColor" : "#fdd600" , "border" : "0"});
        $(".solution-content-col1 img").attr('src','../assets/images/21000-round-bottom-closed-top-tank.png');
      });
      $("#sbtn3").on("click", function() {
        $(".solution-icon-box span").css({ "backgroundColor" : "#fdd600" , "border" : "0"});
        $(".solution-content-col1 img").attr('src','../assets/images/onroad-tank.jpg');
     });
     $("#sbtn4").on("click", function() {
        $(".solution-icon-box span").css({ "backgroundColor" : "#fdd600" , "border" : "0"});
        $(".solution-content-col1 img").attr('src','../assets/images/21000-round-bottom-closed-top-tank.png');
       });
    
    $(".collapse-btn").on("click" , function() {
        $(".mobile-nav").show();
    });   

    $(".closebtn").on("click", function() {
        $(".mobile-nav").hide();
    });
    
});