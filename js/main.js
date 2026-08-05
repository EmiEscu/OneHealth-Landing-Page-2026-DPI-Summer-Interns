/*
  Site interactivity — DPI One Health Landing Page

  Deliberately minimal. Most of the site needs no JavaScript at all: the FAQ
  accordion on index.html uses native <details>/<summary>, and every other
  section is static markup.

  Two things do need it:
    1. Mobile nav toggle          — all pages
    2. Live Dashboards tabs       — interactive-center.html
*/

(function () {
  'use strict';

  /* ============================================================
     1. Mobile nav toggle
     ============================================================ */

  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      // Keep the button's state announced to screen readers
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ============================================================
     2. Live Dashboards tabs  (interactive-center.html)

     Implements the ARIA tabs pattern:
       - one tab is selected at a time (aria-selected)
       - only the selected tab is in the tab order (roving tabindex), so Tab
         moves past the whole tablist rather than through every tab
       - Left/Right/Home/End move between tabs, as expected for tablists

     Progressive enhancement: the HTML ships with all panels visible, so the
     content is readable if this script never runs. Panels are only hidden
     once we know the tabs are working.
     ============================================================ */

  function initDashboardTabs() {
    var tablist = document.querySelector('.dashboard__tablist');
    if (!tablist) return; // not on this page

    var tabs = Array.prototype.slice.call(
      tablist.querySelectorAll('[role="tab"]')
    );
    if (!tabs.length) return;

    function panelFor(tab) {
      return document.getElementById(tab.getAttribute('aria-controls'));
    }

    /**
     * Select one tab and reveal its panel, hiding the rest.
     * @param {HTMLElement} newTab   the tab to select
     * @param {boolean} setFocus     move focus to it (false on first render)
     */
    function selectTab(newTab, setFocus) {
      tabs.forEach(function (tab) {
        var isSelected = tab === newTab;
        var panel = panelFor(tab);

        tab.setAttribute('aria-selected', String(isSelected));
        // Roving tabindex: only the selected tab stays reachable via Tab
        tab.setAttribute('tabindex', isSelected ? '0' : '-1');

        if (panel) panel.hidden = !isSelected;
      });

      if (setFocus) newTab.focus();
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        selectTab(tab, false);
      });

      tab.addEventListener('keydown', function (event) {
        var current = tabs.indexOf(tab);
        var next = null;

        switch (event.key) {
          case 'ArrowRight':
            next = (current + 1) % tabs.length;
            break;
          case 'ArrowLeft':
            next = (current - 1 + tabs.length) % tabs.length;
            break;
          case 'Home':
            next = 0;
            break;
          case 'End':
            next = tabs.length - 1;
            break;
          default:
            return; // let every other key behave normally
        }

        event.preventDefault();
        selectTab(tabs[next], true);
      });
    });

    // Start on whichever tab the HTML marked as selected (falls back to first)
    var initial = tabs.filter(function (tab) {
      return tab.getAttribute('aria-selected') === 'true';
    })[0];

    selectTab(initial || tabs[0], false);
  }

  /* ============================================================
     Init
     ============================================================ */

  initNavToggle();
  initDashboardTabs();
})();
