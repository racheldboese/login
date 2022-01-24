function checkCreds() { //creates new function "checkCreds"
    console.log("checkCreds()started"); //prints "checkCreds() started" to the console when checkCreds() is executed
    var firstName = document.getElementById("fName").value; //creates a variable for firstName and points the function to where the first name is entered.
    var lastName = document.getElementById("lName").value; //creates a variable for lastName and points the function to where the last name is entered.
    var fullName = firstName + " " + lastName; //creates a variable for fullName and defines full name value as firstName + lastName.
    var badgeNumb = document.getElementById("badgeID").value; //creates a variable for badgeNumb and points the function to where the badge number is entered.


    //validate full name
    if (fullName.length > 20 || fullName.length < 2) { //if the full name length is greater than 20 char or less than 2 char
        document.getElementById("loginStatus").innerHTML = "Invalid full name, please resubmit."; //print invalid full name message to loginStatus on .html.
    } else if (badgeNumb > 999 || badgeNumb < 100) { //if the badge number is greater than 999 char or less than 1 char
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please resubmit."; //print invalid badge number message to loginStatus on .html

    } else { //if the conditions above are not met, perform these actions.
        console.log("submission passes!"); //print "submission passes!" to console.
        alert("Access granted!, welcome" + fullName); //create popup alert for personalized access granted message.
        location.replace("UATSpace.html"); //redirect webpage to UATSpace.html upon successful login.
    }

}

