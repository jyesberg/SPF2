'use strict';

var i = 0

if (document.querySelector('.spf-body .spf-side-nav')) {
    SPF.isSideNav(document.querySelector('.spf-body .spf-side-nav'));
}

if (document.querySelector('.spf-body .spf-tabs')) {
    SPF.isTabElement(document.querySelector('.spf-body .spf-tabs'));
}

if (document.querySelector('.spf-body .spf-tabs-2')) {
    SPF.isTabElement(document.querySelector('.spf-body .spf-tabs-2'));
}

if (document.querySelector('.spf-top-nav-mobile')) {
    SPF.isTopNav(document.querySelector('.spf-top-nav-mobile'));
}

try {
    var accordionToggles = document.querySelectorAll('.accordion-toggle');
    for (i = 0; i < accordionToggles.length; i++) {
        var elem = accordionToggles[i];
        elem.addEventListener('click', function (e) {
            UIKIT.accordion.Toggle(e.target);
        });
    }
} catch (e) {
    console.log(e);
}

try {
    var accordionToggles = document.querySelectorAll('.accordion-toggleSlow');
    for (i = 0; i < accordionToggles.length; i++) {
        var elem = accordionToggles[i];
        elem.addEventListener('click', function (e) {
            UIKIT.accordion.Toggle(e.target, 1000);
        });
    }
} catch (e) {}

try {
    var accordionTogglesCallback = document.querySelectorAll('.accordion-toggleCallback');
    for (i = 0; i < accordionTogglesCallback.length; i++) {
        var elem = accordionTogglesCallback[i];
        elem.addEventListener('click', function (e) {
            UIKIT.accordion.Toggle(e.target, undefined, {
                onOpen: function onOpen() {
                    console.log('This function will run when an accordion opens');
                },
                afterOpen: function afterOpen() {
                    console.log('This function will run after an accordion has opened');
                },
                onClose: function onClose() {
                    console.log('This function will run when an accordion closes');
                },
                afterClose: function afterClose() {
                    console.log('This function will run after an accordion has closed');
                }
            });
        });
    }
} catch (e) {}

var closeDropdown1 = function closeDropdown1() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-1"),
        property: 'height',
        endSize: 0,
        speed: 500,
        callback: function callback() {
            console.log("end close #1");
        }
    });
};

var openDropdown1 = function openDropdown1() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-1"),
        property: "height",
        endSize: "auto",
        speed: 500,
        callback: function callback() {
            console.log("end open #1");
        }
    });
};

var toggleDropdown1 = function toggleDropdown1() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-1"),
        property: "height",
        speed: 500,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #1");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #1");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #1");
        }
    });
};

var stopDropdown1 = function stopDropdown1() {
    UIKIT.animate.Stop(document.getElementById("dropdown-1"));
};

var closeDropdown2 = function closeDropdown2() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-2"),
        property: "width",
        endSize: 0,
        callback: function callback() {
            console.log("end close #2");
        }
    });
};

var openDropdown2 = function openDropdown2() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-2"),
        property: "width",
        endSize: "auto",
        callback: function callback() {
            console.log("end open #2");
        }
    });
};

var toggleDropdown2 = function toggleDropdown2() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-2"),
        property: "width",
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #2");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #2");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #2");
        }
    });
};

var stopDropdown2 = function stopDropdown2() {
    UIKIT.animate.Stop(document.getElementById("dropdown-2"));
};

var removePadding = function removePadding() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        endSize: 0,
        callback: function callback() {
            console.log("end removing padding #3");
        }
    });
};

var addPadding = function addPadding() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        endSize: 20,
        callback: function callback() {
            console.log("end add padding #3");
        }
    });
};

var togglePadding = function togglePadding() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-padding1"),
        property: "padding",
        closeSize: 0,
        openSize: 20,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #3");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #3");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #3");
        }
    });
};

var stopPadding = function stopPadding() {
    UIKIT.animate.Stop(document.getElementById("dropdown-padding1"));
};

var addMargin = function addMargin() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        endSize: 20,
        callback: function callback() {
            console.log("end margin add #4");
        }
    });
};

var removeMargin = function removeMargin() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        endSize: 0,
        callback: function callback() {
            console.log("end remove margin #4");
        }
    });
};

var toggleMargin = function toggleMargin() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-margin1"),
        property: "margin",
        closeSize: 0,
        openSize: 20,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #4");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #4");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #4");
        }
    });
};

var stopMargin = function stopMargin() {
    UIKIT.animate.Stop(document.getElementById("dropdown-margin1"));
};

var animateBack = function animateBack() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-position1"),
        property: "left",
        endSize: 0,
        speed: 1000,
        callback: function callback() {
            console.log("end position back #5");
        }
    });
};

var animateForward = function animateForward() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-position1"),
        property: "left",
        endSize: 100,
        speed: 1000,
        callback: function callback() {
            console.log("end position forward #5");
        }
    });
};

var animateTogglePos = function animateTogglePos() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-position1"),
        property: "left",
        closeSize: 0,
        openSize: 100,
        speed: 1000,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #5");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #5");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #5");
        }
    });
};

var animateStopPos = function animateStopPos() {
    UIKIT.animate.Stop(document.getElementById("dropdown-position1"));
};

var openDropdown3 = function openDropdown3() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-3"),
        property: "height",
        endSize: 200,
        speed: 1000,
        callback: function callback() {
            console.log("end open #6");
        }
    });
};

var closeDropdown3 = function closeDropdown3() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-3"),
        property: "height",
        endSize: 50,
        speed: 1000,
        callback: function callback() {
            console.log("end close #6");
        }
    });
};

var toggleDropdown3 = function toggleDropdown3() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-3"),
        property: "height",
        openSize: 200,
        closeSize: 50,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #6");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #6");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #6");
        }
    });
};

var stopDropdown3 = function stopDropdown3() {
    UIKIT.animate.Stop(document.getElementById("dropdown-3"));
};

var openDropdown4 = function openDropdown4() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-4"),
        property: "width",
        endSize: 200,
        speed: 1000,
        callback: function callback() {
            console.log("end open #7");
        }
    });
};

var closeDropdown4 = function closeDropdown4() {
    UIKIT.animate.Run({
        element: document.getElementById("dropdown-4"),
        property: "width",
        endSize: 100,
        speed: 1000,
        callback: function callback() {
            console.log("end close #7");
        }
    });
};

var toggleDropdown4 = function toggleDropdown4() {
    UIKIT.animate.Toggle({
        element: document.getElementById("dropdown-4"),
        property: "width",
        openSize: 200,
        closeSize: 100,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #7");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #7");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #7");
        }
    });
};

var stopDropdown4 = function stopDropdown4() {
    UIKIT.animate.Stop(document.getElementById("dropdown-4"));
};

var openDropdown5 = function openDropdown5() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        endSize: "auto",
        speed: 1000,
        callback: function callback() {
            console.log("end open all #8");
        }
    });
};

var closeDropdown5 = function closeDropdown5() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        endSize: 0,
        speed: 1000,
        callback: function callback() {
            console.log("end close all #8");
        }
    });
};

var toggleDropdown5 = function toggleDropdown5() {
    UIKIT.animate.Toggle({
        element: document.querySelectorAll(".js-vertical-dropdown-group"),
        property: "height",
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #8");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #8");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #8");
        }
    });
};

var openDropdown6 = function openDropdown6() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        endSize: "auto",
        speed: 1000,
        callback: function callback() {
            console.log("end open all #9");
        }
    });
};

var closeDropdown6 = function closeDropdown6() {
    UIKIT.animate.Run({
        element: document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        endSize: 0,
        speed: 1000,
        callback: function callback() {
            console.log("end close all #9");
        }
    });
};

var toggleDropdown6 = function toggleDropdown6() {
    UIKIT.animate.Toggle({
        element: document.querySelectorAll(".js-horizontal-dropdown-group"),
        property: "width",
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #9");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #9");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #9");
        }
    });
};

var openEdgeCase = function openEdgeCase() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase1"),
        property: "height",
        endSize: 3,
        speed: 4,
        callback: function callback() {
            console.log("end open #10");
        }
    });
};

var closeEdgeCase = function closeEdgeCase() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase1"),
        property: "height",
        endSize: 0,
        speed: 4,
        callback: function callback() {
            console.log("end close #10");
        }
    });
};

var toggleEdgeCase = function toggleEdgeCase() {
    UIKIT.animate.Toggle({
        element: document.getElementById("edgecase1"),
        property: "height",
        openSize: 3,
        closeSize: 0,
        speed: 4,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #10");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #10");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #10");
        }
    });
};

var openEdgeCase2 = function openEdgeCase2() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase2"),
        property: "height",
        endSize: 200,
        speed: 473,
        callback: function callback() {
            console.log("end open #11");
        }
    });
};

var closeEdgeCase2 = function closeEdgeCase2() {
    UIKIT.animate.Run({
        element: document.getElementById("edgecase2"),
        property: "height",
        endSize: 0,
        speed: 473,
        callback: function callback() {
            console.log("end close #11");
        }
    });
};

var toggleEdgeCase2 = function toggleEdgeCase2() {
    UIKIT.animate.Toggle({
        element: document.getElementById("edgecase2"),
        property: "height",
        openSize: 200,
        closeSize: 0,
        speed: 473,
        prefunction: function prefunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("prefunction toggle #11");
        },
        postfunction: function postfunction(element, state) {
            console.log(element);
            console.log(state);
            console.log("postfunction toggle #11");
        },
        callback: function callback(element, state) {
            console.log(element);
            console.log(state);
            console.log("callback toggle #11");
        }
    });
};
//# sourceMappingURL=actgov.js.map

//custom jquery top nav toggle
$('button.showmenu').click(function() {
    $('.spf-top-nav-mobile>ul').toggleClass('closed');
});

//equalHeight JS for .spf-article-box
function equalheight(container) {
 var currentTallest = 0,
     currentRowStart = 0,
     currentDiv = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
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

$(window).load(function() {
  equalheight('.equal-height');
});


$(window).resize(function(){
  equalheight('.equal-height');
});

//add .has-children class to top nav items with sub pages under them
$('.spf-top-nav ul li ul li').has('ul').addClass('has-children');

//tabs are jumping to top of page?
$('.spf-tabs-menu---item').on('click', function(e) {
    e.preventDefault();
});
