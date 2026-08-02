/*
  Site interactivity — DPI One Health Landing Page

  Deliberately minimal. The FAQ accordion uses native <details>/<summary>,
  so it needs no JavaScript at all. The only thing that does is the mobile
  nav toggle.
*/

(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      // Keep the button's state announced to screen readers
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();
