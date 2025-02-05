document.addEventListener('DOMContentLoaded', function() {
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
