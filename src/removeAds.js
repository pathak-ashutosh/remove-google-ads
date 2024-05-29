// Function to remove ads
function removeAds() {
  // Find all elements with aria-label='Ads'
  const adsElements = document.querySelectorAll('[aria-label="Ads"]');
  
  // Iterate over each ads element
  adsElements.forEach(ad => {
    // Remove the ads element from the DOM
    ad.remove();
  });
}

// Run the removeAds function when the page loads
window.addEventListener('load', removeAds);