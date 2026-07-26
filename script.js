function generateBookingID() {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return "DSC-" + year + "-" + random;
}

function submitBooking() {

    const name = document.getElementById("name").value.trim().toUpperCase();
    const phone = document.getElementById("phone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const drop = document.getElementById("drop").value.trim();
    const trip = document.getElementById("trip").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const passengers = document.getElementById("passengers").value;

    if (!name || !phone || !pickup || !drop || !trip || !date || !time || !passengers) {
        alert("⚠️ దయచేసి అన్ని వివరాలు నమోదు చేయండి.\nPlease fill all details.");
        return;
    }

    const bookingId = generateBookingID();

    const message =
`🚖 DARSHANA SETHU CAB SERVICE

━━━━━━━━━━━━━━━━━━━━━━
🆔 BOOKING ID
${bookingId}
━━━━━━━━━━━━━━━━━━━━━━

✅ BOOKING SUCCESSFULLY RECEIVED
బుకింగ్ విజయవంతంగా నమోదు అయింది

👤 CUSTOMER NAME / కస్టమర్ పేరు
${name}

📞 PHONE / ఫోన్
${phone}

📍 PICKUP / పికప్
${pickup}

📍 DROP / డ్రాప్
${drop}

🚖 TRIP / ప్రయాణ రకం
${trip}

📅 DATE / తేదీ
${date}

🕒 TIME / సమయం
${time}

👥 PASSENGERS / ప్రయాణికుల సంఖ్య
${passengers}

⏳ STATUS / స్థితి
Pending Confirmation

🙏 Thank You
Darshana Sethu Cab Service

"మీ ప్రయాణం... మా బాధ్యత"`;

    const whatsappNumber = "919491172851";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message),
        "_blank"
    );

    document.getElementById("bookingId").textContent = bookingId;

    document.getElementById("bookingResult").innerHTML =
        "<b>👤 CUSTOMER NAME</b><br>" + name +
        "<br><br><b>📍 " + pickup + " ➜ " + drop + "</b>" +
        "<br><br>🎉 Booking Submitted Successfully<br>బుకింగ్ విజయవంతంగా నమోదు అయింది.";

    document.getElementById("successBox").style.display = "block";
}
