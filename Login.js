function checkCreds()
{
    // Creating Variables for each of the inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;
    var Name = firstName + " " + lastName;
// Creating if statements to verify inputs are correct lenghts
    if (Name.length > 21 || Name.length < 2)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Name";
        alert("Name Can Not be longer than 20 Characters Or Shorter Than 2 Characters")
    }
    
    else if (badgeNumber > 999 || badgeNumber < 99)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge ID Number";
        alert("Badge Number Must be 3 Digits")
    }

    else
    {
        location.replace("Space 1.html")

    }
    
}