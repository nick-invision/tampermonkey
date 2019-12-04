// ==UserScript==
// @name            Jenkins Helpers
// @author          Nick Fields
// @description     Helpers to make you hate Jenkins a little less
// @version         0.1
// @updateURL       https://github.com/nick-invision/tampermonkey/raw/master/src/jenkins.user.js
// @downloadURL     https://github.com/nick-invision/tampermonkey/raw/master/src/jenkins.user.js
// @include         https://jenkins.*
// @include         https://builds.*
// ==/UserScript==
function run() {
  function getKeyCode(letter) {
    return letter.charCodeAt(0);
  }

  // eslint-disable-next-line no-undef
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
