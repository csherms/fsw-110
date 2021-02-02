/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

const log = document.getElementById("output");

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code + ": is " + e.keyCode}`;
}