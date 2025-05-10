// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (can be added if needed)
    console.log('Alzheimer\'s Blog loaded');
    
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
