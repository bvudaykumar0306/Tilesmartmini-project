// const c=document.getElementById("ce");



function openDetails(id){
    window.location.href = "cm.html?id=" + id;


}
function openDetailss(id){
    window.location.href = "c2.html?id=" + id;


}
function openDetail(id){
    window.location.href = "d.html?id=" + id;


}
function openDetai(id){
    window.location.href = "e.html?id=" + id;


}

function sendMessage(){

    let name=document.getElementById("name").value.trim();

    let email=document.getElementById("email").value.trim();

    let message=document.getElementById("message").value.trim();

    let result=document.getElementById("result");

    if(name==""){

        alert("Please enter your name");

        return;

    }

    if(email==""){

        alert("Please enter your email");

        return;

    }

    if(message==""){

        alert("Please enter your message");

        return;

    }

    result.innerHTML="✅ Message Sent Successfully!";

    result.style.color="green";

    document.getElementById("name").value="";

    document.getElementById("email").value="";

    document.getElementById("message").value="";

}
