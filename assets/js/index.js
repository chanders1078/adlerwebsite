$(document).ready(function() {
    var btn = $(".close-btn");
    $(btn).on("click", function() {
        $(btn).parent().hide();
    });
    
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
});