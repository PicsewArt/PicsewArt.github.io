function bindGalleryEventByElement(element) {
  element.onclick = function (event) {
    event = event || window.event
    var target = event.target || event.srcElement
    console.dir(target);
    var link = target.src ? (target.parentNode.href ? target.parentNode : target.parentNode.parentNode) : (target.href ? target : target.parentNode);
    // // this will be very slow:
    // var link = target.src
    // var theParent = target.parentNode;
    // while (1) {
    //   if (theParent) {
    //     if (theParent.href) {
    //       link = theParent.href;
    //     } else {
    //       theParent = theParent.parentNode;
    //     }
    //   } else {
    //     break;
    //   }
    // }
    // // ....
    var options = { index: link, event: event, continuous: true }
    console.log(link);
    var links = this.getElementsByTagName('a'); // Node list
    blueimp.Gallery(links, options)
  }
}

function bindGalleryEventById(elementId) {
  bindGalleryEventByElement(document.getElementById(elementId));
}

function bindGalleryEventByClassName(elementClassName) {
  document.getElementsByClassName(elementClassName).forEach((item, i) => {
    bindGalleryEventByElement(item);
  });
}
// document.getElementById("grid-list-section-s").onclick=function(event){event=event||window.event;var target=event.target||event.srcElement,link=target.src?target.parentNode:target,options={index:link,event:event},links=this.getElementsByTagName("a");blueimp.Gallery(links,options)};
