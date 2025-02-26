    const projectsContainer = document.getElementById('projects-container');

let isMouseDown = false;
let startX;
let scrollLeft;

projectsContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - projectsContainer.offsetLeft;
    scrollLeft = projectsContainer.scrollLeft;
});

projectsContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

projectsContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
});

projectsContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // If mouse is not clicked, don't move

    const x = e.pageX - projectsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Speed multiplier
    projectsContainer.scrollLeft = scrollLeft - walk;
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("pdfModal");
    const openBtn = document.getElementById("openPdfBtn");
    const closeBtn = document.querySelector(".close-btn");
    const pdfViewer = document.getElementById("pdfViewer");

    if (openBtn && modal && closeBtn) {
        // Open Modal
        openBtn.addEventListener("click", function () {
            modal.style.display = "flex";
            console.log("Opening PDF:", pdfViewer.src);
        });

        // Close Modal
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Close Modal when Clicking Outside
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Check for PDF load error
        pdfViewer.addEventListener("error", function () {
            console.error("PDF failed to load. Check the file path.");
        });
    } else {
        console.error("Modal or button not found.");
    }
});

 // Detect DevTools & Disable Modal
 (function() {
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {
            document.getElementById("pdfModal").style.display = "none"; // Hide modal
            alert("Screen capture is disabled!");
        }
    }
    setInterval(detectDevTools, 1000);
})();
