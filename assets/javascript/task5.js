function charCheck() {

    // for the name
    // if statement, so if value is empty, the background is red. if it is anything else, its back to white!
    if (document.getElementById("fullName").value == "") {
        document.getElementById("fullName").style.backgroundColor = "red";
    } else {
        document.getElementById("fullName").style.backgroundColor = "white";
    }
    // for the address
    // if statement, so if value is empty, the background is red. if it is anything else, its back to white!
    if (document.getElementById("address").value == "") {
        document.getElementById("address").style.backgroundColor = "red";
    } else {
        document.getElementById("address").style.backgroundColor = "white";
    }
    // for the phone
    // if statement, so if value is empty, the background is red. if it is anything else, its back to white!
    if (document.getElementById("phone").value == "") {
        document.getElementById("phone").style.backgroundColor = "red";
    } else {
        document.getElementById("phone").style.backgroundColor = "white";
    }
    // for the email
    // if statement, so if value is empty, the background is red. if it is anything else, its back to white!
    if (document.getElementById("email").value == "") {
        document.getElementById("email").style.backgroundColor = "red";
    } else {
        document.getElementById("email").style.backgroundColor = "white";
    }

}