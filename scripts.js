document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');
    const topPanel = document.querySelector('.top-panel');
    let dropdownVisible = false;
  
    // Toggle dropdown visibility on button click
    dropbtn.addEventListener('mousedown', (event) => {
      event.stopPropagation();
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
        dropdownContent.classList.add('hide');
        dropdownVisible = false;
      } else {
        dropdownContent.classList.remove('hide');
        dropdownContent.classList.add('show');
        dropdownVisible = true;
      }
    });
  
    dropdownContent.addEventListener('mousedown', (event) => {
      event.stopPropagation();
      dropdownContent.classList.remove('show');
      dropdownContent.classList.add('hide');
      dropdownVisible = false;
    });
  
    // Show iframe function
    window.showIframe = function(iframeId) {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        iframe.style.display = 'none';
      });
      document.getElementById(iframeId).style.display = 'block';
      // Toggle dropdown content visibility
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
        dropdownContent.classList.add('hide');
        dropdownVisible = false;
      }
    };
  
    // Hide top panel and dropdown button on scroll down, show on scroll up with animation
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        topPanel.style.top = '-5vh'; // Adjust this value based on the height of your top panel
        dropdown.style.top = '-50px'; // Adjust this value based on the height of your dropdown button
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
          dropdownContent.classList.add('hide');
          dropdownVisible = false;
        }
      } else {
        topPanel.style.top = '0';
        dropdown.style.top = '0'; // Set this to the original top position of the dropdown button
        if (dropdownContent.classList.contains('hide')) {
          dropdownContent.classList.remove('hide');
        }
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
  
    topPanel.addEventListener('mouseover', () => {
      topPanel.style.top = '0vh';
      dropdown.style.top = '0';
    });
  
    document.addEventListener('mouseout', (e) => {
      if (topPanel.contains(e.relatedTarget)) {
        return;
      }
  
      const rect = topPanel.getBoundingClientRect();
      if (e.clientY < rect.bottom && e.clientY > rect.top) {
        return;
      }
      if (!dropdownVisible) {
        dropdown.style.top = '-50px';
        topPanel.style.top = '-5vh'; // Hide the panel immediately
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('message', (event) => {
      if (event.data) {
        window.location.href = event.data; // Navigate to the new URL
      }


    });
  });