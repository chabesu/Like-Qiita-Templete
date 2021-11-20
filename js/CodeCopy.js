function copyText() {
    var target = $(this).parent().find("code")[0].textContent;
    textToClipboard(target);
    var itag = this;
    itag.setAttribute("data-content", " Copied!");
    fadeout(itag);
  
    return false;
  }
  Array.prototype.forEach.call(document.querySelectorAll("i"), function (e, i, p) {
    e.addEventListener("click", copyText, false);
  });
  
  function textToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
  
  function sleep(msec) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, msec);
    });
  }
  
  async function fadeout(itag) {
    await sleep(1000);
    itag.setAttribute("data-content", "");
  }