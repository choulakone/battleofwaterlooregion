/* hints on validation form when user clicks on fields */
/* there is a function for each field. Each field has an onfocus which when the user clicks on it it will invoke the onfocus function which will trigger it to write a message in the myname element ID called mynamehint which is in the html file. The purpose of the onblur is to not write anything when a field is not clicked on. */
/* Source: for these codes I followed the "Validating and Processing Forms with JavaScript and PHP" tutorials from lynda.com by Ray Villalobos. The tutorial is called "Detecting the onchange event". */
document.myform.fname.onfocus=function() {
  document.getElementById('mynamehint').innerHTML = "(Enter first name)";
}

document.myform.fname.onblur=function() {
  document.getElementById('mynamehint').innerHTML = "";
}

document.myform.lname.onfocus=function() {
  document.getElementById('mynamehint').innerHTML = "(Enter last name)";
}

document.myform.lname.onblur=function() {
  document.getElementById('mynamehint').innerHTML = "";
}

document.myform.email.onfocus=function() {
  document.getElementById('mynamehint').innerHTML = "(Enter email address)";
}

document.myform.email.onblur=function() {
  document.getElementById('mynamehint').innerHTML = "";
}

document.myform.message.onfocus=function() {
  document.getElementById('mynamehint').innerHTML = "(Enter message)";
}

document.myform.message.onblur=function() {
  document.getElementById('mynamehint').innerHTML = "";
}
/* ---------------------------------------------------------------- */
/* validation for regular expressions or phone numbers */
/* Source: for these codes I followed the "Validating and Processing Forms with JavaScript and PHP" tutorials from lynda.com by Ray Villalobos. The tutorial is called "Dynamic validation with regular expressions". */
/* javascript validation for regular expressions allows for compatibility with other browsers that don't support html validation of regular expressions */
var myField = document.myform.phone; /* creating a variable called myField that calls for the phone name in the myform html fle */
var myError = document.getElementById('mynamehint'); /* creating a variable called myError that calls for the id called mynamehint */

/*myField will become a function. Its function is to perform a establish a pattern 123-111-1111 defined by myPattern. isValid will search for the pattern in myPattern which will search myField which will search phone in the form. If it finds the pattern it will be equal or greater to 0. If it is not it didn't find it. */
myField.onchange = function()  {
  var myPattern = new RegExp("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i"); /* Regular expression pattern was copied from http://html5pattern.com/Phones*/
  var isValid = this.value.search(myPattern) >= 0;

/* if it doesn't find the pattern or is not valid it will write the following message in the myError variable or mynamehint in the form. If it finds the pattern it will say nothing */
  if (!(isValid)) {
    myError.innerHTML = "Enter correct pattern. xxx-xxx-xxxx";
  } else {
    myError.innerHTML = "";
  }

}

/* --------------------hamburger style menu ---------------------------------------------------*/
/* For the hamburger style menu I copied the codes from "How TO - Responsive Top Navigation" tutorial from w3schools.com's website - http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav I removed the codes for the dots. I made some adjustments so that it works with the website.*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "c") { /* === is a javascript operator and means equal value and equal type. If myTopnav is equal value or type to "c" then perform the code */
        x.className += " responsive"; /* += is an operator and is the addition assigment. It adds a value to a variable. Here the x class variable myTopnav is being added with the responsive media query. This will happen when myTopnav is equal to resonsive*/
    } else {
        x.className = "c";
    }
}
