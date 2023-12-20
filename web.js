// script.js
function submitBooking() {
    const venue = document.getElementById('venue').value;
    const artist = document.getElementById('artist').value;
    const date = document.getElementById('date').value;

    const confirmationMessage = `Booking confirmed for ${artist} at ${venue} on ${date}.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
}
