
function generateBookingID() {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return "DS-" + year + "-" + random;
}

function submitBooking() {

    let name = document.getElementById("name").value.trim().toUpperCase();
    let phone = document.getElementById("phone").value.trim();
    let pickup = document.getElementById("pickup").value.trim();
    let drop = document.getElementById("drop").value.trim();
    let trip = document.getElementById("trip").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let passengers = document.getElementById("passengers").value;

    if (
        name === "" ||
        phone === "" ||
        pickup === "" ||
        drop === "" ||
        trip === "" ||
        date === "" ||
        time === "" ||
        passengers === ""
    ) {
        alert("⚠️ Please fill all details.\nదయచేసి అన్ని వివరాలు నమోదు చేయండి.");
        return;
    }

    const bookingId = generateBookingID();

    const message =
`🚖 DARSHANA SETHU CAB SERVICE

━━━━━━━━━━━━━━━━━━━━
🆔 BOOKING ID
${bookingId}
━━━━━━━━━━━━━━━━━━━━

🎉 BOOKING SUCCESSFULLY RECEIVED
✅ బుకింగ్ విజయవంతంగా స్వీకరించబడింది

👤 CUSTOMER NAME
*${name}*

📞 PHONE
${phone}

📍 PICKUP
${pickup}

📍 DROP
${drop}

🚘 TRIP
${trip}

📅 DATE
${date}

🕒 TIME
${time}

👥 PASSENGERS
${passengers}

⏳ STATUS
Pending Confirmation

🙏 Thank you for choosing
Darshana Sethu Cab Service

🌐 https://devi-creator99.github.io/darshana-sethu/`;

    const whatsappNumber = "919491172851";

    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

    const successBox = document.getElementById("successBox");
    successBox.style.display = "block";
    successBox.innerHTML =
`🎉 Booking Submitted Successfully

🆔 Booking ID:
<b>${bookingId}</b>

📞 మా టీమ్ త్వరలో మిమ్మల్ని సంప్రదిస్తుంది.

Thank you for choosing
🚖 Darshana Sethu Cab Service`;
}
