window.addEventListener("wheel", function(event) {
  const scrollWrapper = document.querySelector('.scroll-wrapper');
  
  // Prevent the default vertical scroll behavior
  event.preventDefault();

  // Only consider the vertical scroll (deltaY) and apply it to horizontal scroll
  if (event.deltaY !== 0) {
    // Adjust horizontal scroll position based on the vertical scroll delta
    scrollWrapper.scrollLeft += event.deltaY;
  }
}, { passive: false }); // { passive: false } allows us to use event.preventDefault()