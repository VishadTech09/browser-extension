chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    const body = document.getElementsByTagName("body");

    const currentTime = new Date().toLocaleTimeString('en-IN');
    sendResponse({ timer: currentTime });
    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString('en-IN');
        console.log(currentTime)
        sendResponse({ timer: currentTime });
    }, 1000);

    /*  $("body").prepend(
          `<img  src="${request.url}" id="${request.imageDivId}"
                 class="slide-image" /> `
      );
      $("head").prepend(
          `<style>
            .slide-image {
                height: auto;
                width: 100vw;
            }
          </style>`
      );
      $(`#${request.imageDivId}`).click(function() {
          $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
      });*/

})