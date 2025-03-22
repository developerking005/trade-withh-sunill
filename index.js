function animateCount(target, endValue, duration) {
    let startValue = 0;
    let startTime = null;

    function updateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percentage = Math.min(progress / duration, 1);

        let count = Math.floor(percentage * endValue);
        target.innerText = count.toLocaleString(); // Add commas for readability

        if (percentage < 1) {
            requestAnimationFrame(updateCount);
        }
    }

    requestAnimationFrame(updateCount);
}

window.onload = function () {
    let counterElement = document.getElementById("subscriberCount");
    animateCount(counterElement, 92998, 5000); // 5 seconds duration
};