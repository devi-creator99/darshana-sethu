function generateBookingID() {
    const now = new Date();

    const year = now.getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);

    return "DS-" + year + "-" + random;
}

function submitBooking() {

    const bookingId = generateBookingID();

    const name = document.getElementById("name").value.toUpperCase();
    const phone = document.getElementById("phone").value;
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const trip = document.getElementById("trip").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const passengers = document.getElementById("passengers").value;

    if (
        !name ||
        !phone ||
        !pickup ||
        !drop ||
        !trip ||
        !date ||
        !time ||
        !passengers
    ) {
        alert("Please fill all details / దయచేసి అన్ని వివరాలు నమోదు చేయండి");
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

📞 PHONE NUMBER
${phone}

📍 PICKUP LOCATION
${pickup}

📍 DROP LOCATION
${drop}

🚘 TRIP TYPE
${trip}

📅 JOURNEY DATE
${date}

🕒 PICKUP TIME
${time}

👥 PASSENGERS
${passengers}

⏳ STATUS
Pending Confirmation
నిర్ధారణ కోసం వేచి ఉండండి

📞 మా టీమ్ త్వరలో మిమ్మల్ని సంప్రదిస్తుంది.

🙏 Thank you for choosing
Darshana Sethu Cab Service

🌐 Website:
https://yourwebsite.github.io
`;

    const whatsappNumber = "919491172851";

    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

    document.getElementById("successBox").style.display = "block";

    document.getElementById("bookingResult").innerHTML =
        "<b>🆔 Booking ID:</b> " +
        bookingId +
        "<br><br>✅ Booking Submitted Successfully.";
}
