document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle animation effect when the page loads
    const googleButton = document.querySelector('.google-button');
    
    // Add a subtle entrance animation
    setTimeout(() => {
        googleButton.style.opacity = '0';
        googleButton.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            googleButton.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            googleButton.style.opacity = '1';
            googleButton.style.transform = 'translateY(0)';
        }, 100);
    }, 300);
    
    // Add a pulse effect when hovering over the button
    googleButton.addEventListener('mouseover', function() {
        this.style.animation = 'gradientButtonAnimation 5s ease infinite, pulse 1.5s infinite';
    });
    
    googleButton.addEventListener('mouseout', function() {
        this.style.animation = 'gradientButtonAnimation 5s ease infinite';
    });
});
