// List of valid emails
const validEmails = [
    'test@example.com',
    'teacher@school.edu',
    'admin@education.org'
];

document.addEventListener('DOMContentLoaded', function() {
    // Email form handling
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const linkContainer = document.getElementById('linkContainer');

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim().toLowerCase();
        
        if (validEmails.includes(email)) {
            linkContainer.classList.remove('hidden');
            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        } else {
            linkContainer.classList.add('hidden');
            emailInput.style.borderColor = '#e73c7e';
            alert('Το email δεν είναι έγκυρο.');
        }
    });

    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('February 26, 2025 17:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>
                <span>${days}</span>
                <p>Days</p>
            </div>
            <div>
                <span>${hours}</span>
                <p>Hours</p>
            </div>
            <div>
                <span>${minutes}</span>
                <p>Minutes</p>
            </div>
            <div>
                <span>${seconds}</span>
                <p>Seconds</p>
            </div>
        `;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "The event has started!";
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
