// stop/startAnnimation are the functions that will get called on slide transitions
const stopAnnimation = (slideId) => {
  // do something...
  console.log(`stop:: ${slideId}`);
};
const startAnnimation = (slideId) => {
  // do something...
  console.log(`start:: ${slideId}`);
};

// Create your observer
const observer = new MutationObserver(function (mutationList, observer) {
  // mutationlist returns as an array of changed elements
  // loop over it to check for the type of display chagne and call that function   
  mutationList.forEach((element) => {
    if (element.target.style.display == "none") {
        // if the changed element display is none, pass the slideId to the stopAnnimation function
      stopAnnimation(element.target.dataset.slideId);
    }
    if (element.target.style.display == "block") {
        // if the changed element display is block, pass the slideId to the startAnnimation function
      startAnnimation(element.target.dataset.slideId);
    }
  });
});

// Select the element you want to watch – this will be the slider wrapper
const elementNode = document.querySelector(".slideshow-container");

// Call the observe function by passing the node you want to watch with configuration options
observer.observe(elementNode, {
  attributes: true,
  childList: true,
  subtree: true,
});
