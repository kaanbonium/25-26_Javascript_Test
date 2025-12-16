/* Put code for the task below */
function charCheck() {
    len = document.getElementById("fullName").value.length;
    // Minimum length 8
    if (len < 1) {
        document.getElementById("fullName").innerHTML = "<font color='red'>Password must be at least 8 characters</font>";
    } else {
        document.getElementById("fullName").innerHTML = "<font color='green'>Password is strong</font>";
    }

    len = document.getElementById("address").value.length;
    // Minimum length 8
    if (len < 1) {
        document.getElementById("length").innerHTML = "<font color='red'>Password must be at least 8 characters</font>";
    } else {
        document.getElementById("length").innerHTML = "<font color='green'>Password is strong</font>";


    }
    len = document.getElementById("phone").value.length;
    // Minimum length 8
    if (len < 1) {
        document.getElementById("length").innerHTML = "<font color='red'>Password must be at least 8 characters</font>";
    } else {
        document.getElementById("length").innerHTML = "<font color='green'>Password is strong</font>";


    }
    len = document.getElementById("email").value.length;
    // Minimum length 8
    if (len < 1) {
        document.getElementById("length").innerHTML = "<font color='red'>Password must be at least 8 characters</font>";
    } else {
        document.getElementById("length").innerHTML = "<font color='green'>Password is strong</font>";


    }
}

