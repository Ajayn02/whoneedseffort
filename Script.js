// Get elements
const brandName = document.querySelector('.brand-name');
const logo = document.querySelector('.logo');

// Event listener for scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // When scrolling down
    brandName.style.opacity = 0;  // Fade out the brand name
    logo.style.display = 'block'; // Show the logo
  } else {
    // When at the top
    brandName.style.opacity = 1;  // Show the brand name
    logo.style.display = 'none';  // Hide the logo
  }
});
