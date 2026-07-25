function sendBooking() {

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let pickup = document.getElementById("pickup").value.trim();
  let drop = document.getElementById("drop").value.trim();
  let trip = document.getElementById("trip").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let passengers = document.getElementById("passengers").value.trim();

  if (
    !name ||
    !phone ||
    !pickup ||
    !drop ||
    !date ||
    !time ||
    !passengers
  ) {
    alert("అన్ని వివరాలు నమోదు చేయండి.");
    return;
  }

  let bookingID =
    "DS-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(100000 + Math.random() * 900000);

  document.getElementById("successBox").style.display = "block";
  document.getElementById("bookingResult").innerHTML =
    "🆔 Booking ID: <b>" + bookingID + "</b>";

  let message =
`🚖 Darshana Sethu Cab Booking

🆔 Booking ID: ${bookingID}

👤 Customer Name: ${name}
📞 Phone Number: ${phone}

📍 Pickup: ${pickup}
📍 Drop: ${drop}

🚘 Trip Type: ${trip}

📅 Journey Date: ${date}
🕒 Pickup Time: ${time}

👥 Passengers: ${passengers}

✅ Booking Status: Pending Confirmation

🙏 Thank you for choosing Darshana Sethu Cab.

"మీ ప్రయాణం... మా బాధ్యత."`;

  let whatsapp =
    "https://wa.me/919491172851?text=" +
    encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
