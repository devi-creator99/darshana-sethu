function generateBookingID() {
    const now = new Date();

    const yy = now.getFullYear().toString().slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    const random = Math.floor(1000 + Math.random() * 9000);

    return `DS${yy}${mm}${dd}-${random}`;
}

function submitBooking() {

    const bookingId = generateBookingID();

    const name = document.getElementById("name").value.trim().toUpperCase();
    const phone = document.getElementById("phone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const drop = document.getElementById("drop").value.trim();
    const trip = document.getElementById("trip").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const passengers = document.getElementById("passengers").value;

    if (
        !name ||
        !phone ||
        !pickup ||
        !drop ||
        !date ||
        !time ||
        !passengers
    ) {
        alert("⚠️ Please fill all details.\nదయచేసి అన్ని వివరాలు నమోదు చేయండి.");
        return;
    }

    const message =
`🚖══════════════════════🚖
DARSHANA SETHU CAB SERVICE
"మీ ప్రయాణం... మా బాధ్యత"
🚖══════════════════════🚖

🎉 BOOKING SUCCESSFULLY RECEIVED
✅ బుకింగ్ విజయవంతంగా స్వీకరించబడింది

━━━━━━━━━━━━━━━━━━
🆔 BOOKING ID
${bookingId}
━━━━━━━━━━━━━━━━━━

👤 CUSTOMER NAME
${name}

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
నిర్ధారణ కోసం వేచి ఉండండి

📞 మా టీమ్ త్వరలో మిమ్మల్ని సంప్రదిస్తుంది.

🙏 Thank you for choosing
Darshana Sethu Cab Service`;

    const whatsappNumber = "919491172851";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

    document.getElementById("successBox").style.display = "block";
    document.getElementById("bookingResult").innerHTML =
        "🆔 Booking ID: <b>" + bookingId + "</b><br><br>✅ Booking Submitted Successfully.";
}
