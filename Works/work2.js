const images = [
"../images/3d models/Valorant Bucky.png",
"../images/3d models/Apex Knife.png",
"../images/3d models/Fire Extengisher.png",
"../images/3d models/Jeep.png",
"../images/3d models/Face.jpg",
"../images/3d models/Robot. model.png"
  ];
  let currentIndex = 0;
  let mainImageIndex = 0;
  let slideshowInterval; // Declare the interval ID variable
  
  function openModal(index) {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("modalImage").src = images[index];
    currentIndex = index;
    stopSlideshow(); // Stop the slideshow when the modal is opened
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    startSlideshow(); // Restart the slideshow when the modal is closed
  }
  
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    document.getElementById("modalImage").src = images[currentIndex];
  }
  
  function changeMainImage() {
    mainImageIndex++;
    if (mainImageIndex >= images.length) {
      mainImageIndex = 0;
    }
    document.getElementById("mainImage").src = images[mainImageIndex];
  }
  
  function stopSlideshow() {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
    }
  }
  
  function startSlideshow() {
    stopSlideshow(); // Ensure any existing interval is cleared
    slideshowInterval = setInterval(changeMainImage, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Ensure modal is not displayed on page load
    document.getElementById("myModal").style.display = "none";
    
    // Start the main image slideshow
    startSlideshow();
  });
  
  function openMainImageModal() {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("modalImage").src = images[mainImageIndex];
    currentIndex = mainImageIndex;
    stopSlideshow(); // Stop the slideshow when the main image is clicked
  }
  
  function goBack() {
    if (window.history.length > 1) {
      window.history.back(); // Go back in history
    } else {
      alert('No previous page in history.');
    }
  }
  