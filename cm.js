function showForm(){

    document.getElementById("bookingForm").style.display="block";

    document.getElementById("bookBtn").style.display="none";

}

function calculatePrice(){

    let tiles=document.getElementById("tiles").value;

    let total=tiles*129;

    document.getElementById("price").value=total;

}

function bookTiles(){

    alert("Booking Successful!");

    let btn=document.getElementById("submitBtn");

    btn.innerHTML="Booked ";

    btn.style.background="green";

    btn.disabled=true;

    return false;

}