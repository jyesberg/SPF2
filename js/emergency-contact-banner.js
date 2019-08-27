//equalHeightEmergency for .contact-group (Emergency Contact Banner)
function equalHeightEmergency(container) {
    var currentTallest = 0,
    currentRowStart = 0,
    currentDiv = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
        
    $(container).each(function() {
        $el = $(this);
        $($el).height('auto');
        topPosition = $el.position().top;

        if (currentRowStart != topPosition) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

// Make the contact-group boxes same height
$(window).load(function() {
  equalHeightEmergency('.contact-group');
});


$(window).resize(function(){
  equalHeightEmergency('.contact-group');
});

//Add js class to html element
$('html').addClass('js');

var Emergencycontacttakeover = function () {
    // Align the button text vertically
//    $('.button-text-wrapper').flexVerticalCenter();

    // Set the tabindex to -1 to prevent keyboard focus
    $('.emergency-contact-drop-down a').attr('tabindex', '-1');

    // Add aria attributes
    $('.emergency-contact-button').attr('aria-expanded', 'false');
    $('.emergency-contact-drop-down').attr('aria-hidden', 'true');

    // Clicking on the emergency contact button
    $('.emergency-contact-button').click(function ($event) {
        $event.preventDefault();
        // Open the dropdown
        $('.emergency-contact-drop-down').toggleClass('active');
        // Rotate the chevron
        $(this).toggleClass('active');
        $('.call-number').removeClass('call-number');

        // Toggle aria label
        $(this).hasClass('active') ? $(this).attr('aria-expanded', 'true') : $(this).attr('aria-expanded', 'false');
        $(this).hasClass('active') ? $('.emergency-contact-drop-down').attr('aria-hidden', 'false') : $('.emergency-contact-drop-down').attr('aria-hidden', 'true');
        $(this).hasClass('active') ? $('.emergency-contact-drop-down a').attr('tabindex', '0') : $('.emergency-contact-drop-down a').attr('tabindex', '-1');
    });

    // Clicking on the phone number
    $('.emergency-contact-drop-down a').click(function ($event) {
        $event.preventDefault();
        $('.call-number').removeClass('call-number');
        $(this).addClass('call-number');

        if (!isMobileDevice()) {
            // If we are on desktop then just copy the text to clipboard
            // ** Pending ***
        } else {
            // Else open the phone 
            window.open($(this).attr('href'));
        }
    });

    // Focusing out of the previously clicked phone number
    /*
     $('.emergency-contact-drop-down a').focusout(function () {
     $('.call-number').removeClass('call-number');
     $('.emergency-contact-button').removeClass('active');
     $('.emergency-contact-drop-down').removeClass('active');
     $('.emergency-contact-button').removeClass('active');
     });
     
     // Clicking somewhere else other than the emmergency button
     $('.emergency-contact-button').focusout(function () {
     setTimeout(function () {
     if (!$('.call-number').length) {
     $('.emergency-contact-drop-down').removeClass('active');
     $('.emergency-contact-button').removeClass('active');
     }
     }, 100);
     });
     */

    // When typing on keyboard an pressing the ESC key
    $(document).keyup(function (e) {
        if (e.keyCode === 27) { // escape key maps to keycode `27`
            $('.emergency-contact-drop-down').removeClass('active');
            $('.emergency-contact-button').removeClass('active');
        }
    });
    
    //Close banner when area outside container clicked
    $(document).click(function(e) {
        if ($('.emergency-contact-drop-down').hasClass('active') === true) {
            if ($(e.target).closest("#block-emergencycontacttakeover").length === 0) {
                $('.emergency-contact-drop-down').removeClass('active');
                $('.emergency-contact-button').removeClass('active');
            }
        }
    });
    

    // Simple function to check if is mobile device
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    ;

};

Emergencycontacttakeover();

// Constructor
var FeatureBanner = function () {
    // Vertical align the text in the container
    $('.block-block-content-feature-banner .inner').flexVerticalCenter();

    // Add active class to animate the banner
    setTimeout(function () {
        $('.block-block-content-feature-banner').addClass('active');
        $('.block-block-content-feature-banner .text').addClass('active');
    }, 20);
    
    // If banner text height to too tall then adjust the main banner height 
    if ($('.block-block-content-feature-banner .inner').height() > $('.block-block-content-feature-banner').height()) {
        $('.block-block-content-feature-banner .spf-image-outer').height($('.block-block-content-feature-banner .inner').height() + 40);
    }
};
