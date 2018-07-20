(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('#clock').countdown('2020/10/10', function(event) {
            $(this).html(event.strftime('<span class="coundown-wrap"><span class="coundown-number">%w <span>weeks</span></span> <span class="coundown-number">%D <span>days</span></span> <span class="coundown-number">%H <span>Hours</span></span> <span class="coundown-number">%M <span>Minits</span></span> <span class="coundown-number">%S <span>Seconds</span></span></span>'));
          });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	