function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true});
    document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial update