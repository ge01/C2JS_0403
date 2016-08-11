// This program uses the modulus operator to determine
// if a number is odd or even.  If the number is evelnly divisible
// by 2, it is an even number.  A remainder indicates if it is odd.
function myFunction() {
    var x, text, oddOrEven;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 100) {
        text = "Input not valid";
        oddOrEven = "";
    } else {
        text = "Input OK";
        if(x % 2 === 0)
          oddOrEven = "Is even";
        else
          oddOrEven = "Is odd";
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo1").innerHTML = oddOrEven;
}
