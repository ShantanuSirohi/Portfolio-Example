

function animateProgressBar() {
    let progressBarElements = document.querySelectorAll(".skill-progress");

    const options = {
        threshold: 0.75,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressValue = entry.target.getAttribute("data-progress");
                entry.target.style.width = progressValue;
            }
        });
    }, options);

    progressBarElements.forEach((progressBar) => {
        observer.observe(progressBar);
    });
}

// Call the animateProgressBar function when the page loads
window.addEventListener("load", animateProgressBar);


// Records progress bar

function animateCounter(element, targetNumber) {
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 60); // Adjust the increment for smoother animation

    const interval = setInterval(() => {
        element.textContent = currentNumber;
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
            element.textContent = targetNumber;
            clearInterval(interval);
        }
    }, 20); // Adjust the interval speed for smoother animation
}

function animateCounters() {
    const counterElements = document.querySelectorAll(".number");

    const options = {
        threshold: 0.7, // Adjust the threshold value
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetNumber = parseInt(entry.target.getAttribute("data-num"));
                animateCounter(entry.target, targetNumber);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counterElements.forEach((counter) => {
        observer.observe(counter);
    });
}

// Call the animateCounters function when the page loads
window.addEventListener("load", animateCounters);