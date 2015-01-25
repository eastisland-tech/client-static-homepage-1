$(document).ready(function(){
    $('.slider-control').on('click', function(){
        var slider = $('.logo-slider');
        if ($(this).hasClass('slider-control-left')){
            var logo = $('li', slider).first().remove();
            slider.append(logo);
        }else{
            var logo = $('li', slider).last().remove();
            slider.prepend(logo);
        }
        return false;
    });

    $('a.scroll-to').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1200);
        return false;
    });
});
