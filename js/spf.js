var SPF = SPF || {};

(function (SPF) {

    // --------------Side navigation functions
    SPF.isSideNav = function (element) {
        var firstElemetns = element.querySelectorAll('.spf-side-nav--first');
        if (!firstElemetns) return;

        for (i = 0; i < firstElemetns.length; i++) {
            var thisElement = firstElemetns[i];
            var ariaControl = thisElement.getAttribute('aria-controls');
            var secondLevelNav = document.getElementById(ariaControl);

            if (secondLevelNav) {
                thisElement.querySelector('a').addEventListener('click', function (e) {
                    SPF.toggleClassnames(e.currentTarget);
                })
            }
        }
    }

    SPF.toggleClassnames = function (element) {
        element = element.parentElement;

        if (element.classList.contains('close')) {
            element.classList.remove('close');
            element.classList.add('open');
            element.setAttribute('aria-expanded', 'true');
        } else if (element.classList.contains('open')) {
            element.classList.remove('open');
            element.classList.add('close');
            element.setAttribute('aria-expanded', 'false');
        }
    }

    // End of - Side navigation functions------------

    // --------------Tabs functions
    SPF.isTabElement = function (element) {
        var tabMenuItems = element.querySelectorAll('.spf-tabs-menu---item');

        if (tabMenuItems && tabMenuItems.length > 0) {
            for (i = 0; i < tabMenuItems.length; i++) {
                tabMenuItems[i].addEventListener('click', function (e) {
                    SPF.toggleTab(e.currentTarget, element);
                });
            }
            SPF.initiateTabElement(element);
        }
    }

    SPF.initiateTabElement = function (element) {
        var activeMenu = element.querySelector('.spf-tabs-menu---item.active');
        if (activeMenu) {
            SPF.toggleTab(activeMenu, element);
        } else {
            var firstElement = element.querySelector('.spf-tabs-menu---item');
            SPF.toggleTab(firstElement, element);
        }
    }

    SPF.toggleTab = function (clickedMenuItem, tabsElement) {
        var tabMenuItems = tabsElement.querySelectorAll('.spf-tabs-menu---item');
        var tabId = clickedMenuItem.getAttribute('aria-controls');
        var tabsContentElements = tabsElement.querySelectorAll('.spf-tabs-content .spf-tabs-content--item');
        for (i = 0; i < tabsContentElements.length; i++) {
            var thisTabElement = tabsContentElements[i];

            if (thisTabElement.getAttribute('id') !== tabId) {
                thisTabElement.classList.remove('active');
                thisTabElement.setAttribute('aria-hidden', 'true');
            } else {
                thisTabElement.classList.add('active');
                thisTabElement.setAttribute('aria-hidden', 'false');
            }
        }

        for (j = 0; j < tabMenuItems.length; j++) {
            var thisMenuItem = tabMenuItems[j];
            if (thisMenuItem.getAttribute('aria-controls') === tabId) {
                thisMenuItem.classList.add('active');
                thisMenuItem.setAttribute('aria-expanded', 'true');
            } else {
                thisMenuItem.classList.remove('active');
                thisMenuItem.setAttribute('aria-expanded', 'false');
            }
        };

    };
    // End of - Tabs functions------------

    // --------------Tabs functions

    SPF.isTopNav = function (element) {
        var topNavMenuLink = element.querySelector('.spf-top-nav-mobile--title > a');

        if (topNavMenuLink) {
            topNavMenuLink.addEventListener('click', function (e) {
                SPF.toggleTopNav(element);
            });
            SPF.initiateTopNav(element);
        }

    }

    SPF.toggleTopNav = function (element) {
        if (element.classList.contains('close')) {
            element.classList.remove('close');
            element.classList.add('open');
        } else if (element.classList.contains('open')) {
            element.classList.remove('open');
            element.classList.add('close');
        }
    }

    SPF.initiateTopNav = function (element) {
        if (!(element.classList.contains('close') || element.classList.contains('open'))) {
            element.classList.add('close');
        }
    }

    // End of - Tabs functions------------

}(SPF));

if (typeof module !== 'undefined') {
    module.exports = SPF;
}