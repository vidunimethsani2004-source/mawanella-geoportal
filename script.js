/* ==========================================================================
   Mawanella Village Geo-Platform
   PL1106 Assignment 2 - behaviour
   Plain JavaScript. No libraries, no build step, no dependencies.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------ navigation */

  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // close the menu after tapping a link on small screens
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -------------------------------------------------------- feedback form
     A static site has no server to post to, so the form hands the message
     to the visitor's own mail client. Swap EDITOR_EMAIL for a real address,
     or point the <form> at a form service if you want it collected online.
     ---------------------------------------------------------------------- */

  var EDITOR_EMAIL = 'info@mawanella.example';

  var feedbackForm = document.getElementById('feedbackForm');
  var formStatus = document.getElementById('formStatus');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('fName').value.trim();
      var email = document.getElementById('fEmail').value.trim();
      var topic = document.getElementById('fTopic').value;
      var message = document.getElementById('fMsg').value.trim();

      if (!name || !message) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill in your name and a message.';
        return;
      }

      var body = 'Name: ' + name + '\n'
        + 'Email: ' + (email || 'not given') + '\n'
        + 'Topic: ' + topic + '\n\n'
        + message + '\n';

      window.location.href = 'mailto:' + EDITOR_EMAIL
        + '?subject=' + encodeURIComponent('Mawanella feedback: ' + topic)
        + '&body=' + encodeURIComponent(body);

      formStatus.className = 'form-status';
      formStatus.textContent = 'Thank you, ' + name +
        '. Your mail app should now open with the message ready to send.';
      feedbackForm.reset();
    });
  }
})();
