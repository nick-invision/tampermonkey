/* eslint-disable no-undef */
// ==UserScript==
// @name            Jenkins Helpers
// @author          Nick Fields
// @description     Helpers to make you hate Jenkins a little less
// @version         0.6
// @updateURL       https://github.com/nick-invision/tampermonkey/raw/master/src/jenkins.user.js
// @downloadURL     https://github.com/nick-invision/tampermonkey/raw/master/src/jenkins.user.js
// @include         https://jenkins.*
// @include         https://builds.*
// @require         https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==
function run() {
  function getKeyCode(letter) {
    return letter.charCodeAt(0);
  }

  jQuery(window).keydown((e) => {
    if (e.shiftKey && e.ctrlKey) {
      switch (e.which) {
        case getKeyCode('R'): {
          const elem = document.getElementById('workflow-editor-1');
          elem.style.height = '1500px';
          break;
        }
        default:
          break;
      }
    }
  });
}
run();
