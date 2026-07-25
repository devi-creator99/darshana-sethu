
function sendBooking() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const drop = document.getElementById("drop").value.trim();

    if (!name || !phone || !pickup || !drop) {
        alert("Please fill all fields");
        return;
    }

    const message =
`🚖 *New Cab Booking*

👤 Customer: ${name}
📞 Phone: ${phone}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}`;

    const whatsappNumber = "919491172851";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
