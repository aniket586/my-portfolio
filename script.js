// Get all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add click event listener to each portfolio item
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add active class to clicked item
    item.classList.add('active');

    // Remove active class from all other items
    portfolioItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Show the corresponding project details
    const projectDetails = document.querySelector(`#${item.id}-details`);
    projectDetails.classList.add('active');

    // Hide the project details of other projects
    portfolioItems.forEach(otherItem => {
      const otherProjectDetails = document.querySelector(`#${otherItem.id}-details`);
      otherProjectDetails.classList.remove('active');
    });
  });
});
const downloadResumeLink = document.getElementById("downloadResumeLink");
const downloadResumeButton = document.getElementById("downloadResumeButton");
downloadResumeButton.addEventListener("click", function() {
  downloadResumeLink.click();
});
downloadResumeLink.style.display = "none";
downloadResumeButton.style.display = "block";
