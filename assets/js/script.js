$(document).ready(function () {
    const $image = $('#report-image');
    const $zoomSlider = $('#zoom-slider');
    const $zoomValue = $('#zoom-value');
    const $zoomIn = $('#zoom-in');
    const $zoomOut = $('#zoom-out');
  
    // Function to update zoom level
    function updateZoom(zoomLevel) {
      $zoomSlider.val(zoomLevel);
      $image.css('transform', `scale(${zoomLevel / 100})`);
      $zoomValue.text(`${zoomLevel}%`);
    }
  
    // Handle slider change
    $zoomSlider.on('input', function () {
      const zoomLevel = $(this).val();
      updateZoom(zoomLevel);
    });
  
    // Handle Zoom In button
    $zoomIn.on('click', function () {
      let zoomLevel = parseInt($zoomSlider.val());
      if (zoomLevel < 200) {
        zoomLevel += 10;
        updateZoom(zoomLevel);
      }
    });
  
    // Handle Zoom Out button
    $zoomOut.on('click', function () {
      let zoomLevel = parseInt($zoomSlider.val());
      if (zoomLevel > 50) {
        zoomLevel -= 10;
        updateZoom(zoomLevel);
      }
    });
  });
  
  /*profile faq pages*/

  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq_item");
  
    faqItems.forEach((item) => {
      const heading = item.querySelector(".faq_heading");
      const content = item.querySelector(".faq_content");
      const icon = heading.querySelector("i");
  
      heading.addEventListener("click", () => {
        // Toggle the display of the content
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
  
        // Toggle the Font Awesome icon class
        icon.classList.toggle("fa-angle-down", isVisible);
        icon.classList.toggle("fa-angle-up", !isVisible);
      });
    });
  });