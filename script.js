// =============================
// DARSHANA SETHU CAB SERVICE
// =============================

function generateBookingId() {

    const d = new Date();

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = String(d.getFullYear()).slice(-2);

    const random = Math.floor(1000 + Math.random() * 9000);

    return `DSCS-${day}${month}${year}-${random}`;
}

function bookCab() {

    const name =
    document.getElementById("name").value.trim().toUpperCase();

    const phone =
    document.getElementById("phone").value.trim();

    const pickup =
    document.getElementById("pickup").value.trim().toUpperCase();

    const drop =
    document.getElementById("drop").value.trim().toUpperCase();

    const trip =
    document.getElementById("trip").value.toUpperCase();

    const date =
    document.getElementById("date").value;

    const passengers =
    document.getElementById("passengers").value;

    const time24 =
    document.getElementById("time").value;

    if (
        !name ||
        !phone ||
        !pickup ||
        !drop ||
        !date ||
        !time24 ||
        !passengers
    ) {
        alert("PLEASE FILL ALL DETAILS");
        return;
    }

    let [hour, minute] = time24.split(":");

    hour = parseInt(hour);

    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12;

    const time = `${hour}:${minute} ${ampm}`;

    const bookingId = generateBookingId();
        const message =
`━━━━━━━━━━━━━━━━━━━━━━
🚖 DARSHANA SETHU CAB SERVICE
━━━━━━━━━━━━━━━━━━━━━━

🆔 BOOKING ID
${bookingId}

👤 CUSTOMER
${name}

📞 MOBILE
${phone}

📍 PICKUP
${pickup}

📍 DROP
${drop}

🚖 TRIP
${trip}

📅 DATE
${date}

🕒 TIME
${time}

👥 PASSENGERS
${passengers}

━━━━━━━━━━━━━━━━━━━━━━
🙏 THANK YOU FOR CHOOSING

DARSHANA SETHU CAB SERVICE

🚖 YOUR JOURNEY... OUR RESPONSIBILITY
━━━━━━━━━━━━━━━━━━━━━━`;

    const whatsapp =
        "https://wa.me/919849402851?text=" +
        encodeURIComponent(message);

    window.open(whatsapp, "_blank");

    document.getElementById("successBox").style.display = "block";
    document.getElementById("bookingId").innerHTML = bookingId;
    document.getElementById("bookingMessage").innerHTML =
        "✅ BOOKING REQUEST SENT SUCCESSFULLY";

}

function getLocation(){

    if(!navigator.geolocation){
        alert("LOCATION NOT SUPPORTED");
        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position){

            const lat = position.coords.latitude.toFixed(6);
            const lng = position.coords.longitude.toFixed(6);

            document.getElementById("pickup").value =
            `${lat}, ${lng}`.toUpperCase();

        },

        function(){

            alert("PLEASE ALLOW LOCATION PERMISSION");

        }

    );

}
const message =
`━━━━━━━━━━━━━━━━━━━━━━
🚖 DARSHANA SETHU CAB SERVICE
━━━━━━━━━━━━━━━━━━━━━━

🆔 BOOKING ID
${bookingId}

👤 CUSTOMER
${name}

📞 MOBILE
${phone}

📍 PICKUP
${pickup}

📍 DROP
${drop}

🚖 TRIP
${trip}

📅 DATE
${date}

🕒 TIME
${time}

👥 PASSENGERS
${passengers}

━━━━━━━━━━━━━━━━━━━━━━
✅ BOOKING REQUEST RECEIVED

📞 Our Team will contact you shortly
to confirm your booking.

🙏 Thank You for choosing

🚖 DARSHANA SETHU CAB SERVICE

💙 మీ ప్రయాణం... మా బాధ్యత
━━━━━━━━━━━━━━━━━━━━━━`;

const whatsapp =
"https://wa.me/919849402851?text=" +
encodeURIComponent(message);

window.open(whatsapp,"_blank");

document.getElementById("successBox").style.display="block";

document.getElementById("bookingId").innerHTML=bookingId;

document.getElementById("bookingMessage").innerHTML=
`
<b>✅ BOOKING REQUEST RECEIVED</b><br><br>

📞 Our Team will contact you shortly
to confirm your booking.<br><br>

🙏 Thank You for choosing<br>

<b>🚖 DARSHANA SETHU CAB SERVICE</b>
`;

}

function getLocation(){

if(!navigator.geolocation){

alert("LOCATION NOT SUPPORTED");

return;

}

navigator.geolocation.getCurrentPosition(

function(position){

const lat=position.coords.latitude.toFixed(6);

const lng=position.coords.longitude.toFixed(6);

document.getElementById("pickup").value=
`${lat}, ${lng}`.toUpperCase();

},

function(){

alert("PLEASE ALLOW LOCATION PERMISSION");

}

);

}
