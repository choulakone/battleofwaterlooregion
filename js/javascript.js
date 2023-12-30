/* --------------------slideshow ---------------------------------------------------*/
/* For the slideshow I copied the codes from the slideshow tutorials from w3schools.com's website - http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow. I removed the codes for the dots and made some adjustments so the code works on the site. */
/* Javascript explanation from w3schools http://www.w3schools.com/w3css/w3css_slideshow.asp */
var slideIndex = 1; /* Sets the slideIndex to the first picture. */
showSlides(slideIndex); /* Shows the first image */

/* plusSlides is invoked when user clicks on button. The plusSlides() function subtracts one or  adds one to the slideIndex. */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* From w3schools - The showSlides() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.

If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero.

If the slideIndex is less than 1 it is set to number of elements (x.length).*/
function showSlides(n) {
  var i; /* i is undefined */
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  /* For loop. Definition from http://www.w3schools.com/js/js_loop_for.asp. The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
    code block to be executed
}

Statement 1 is executed before the loop (the code block) starts.

Statement 2 defines the condition for running the loop (the code block).

Statement 3 is executed each time after the loop (the code block) has been executed.
Statement 3 increases a value (i++) each time the code block in the loop has been executed.*/
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
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
/* --------------------google maps ---------------------------------------------------*/

/* Below I've copied the code from Google Maps API. https://developers.google.com/maps/documentation/javascript/tutorial. The "var" stands for variable and "map" is the variable being defined. The function is the functinonality that is going to happen. Between the curly brackets are the codes to be executed. Here the codes that will be executed are the locations, specifically latitude and longitude coordinates of the cities that make up the Region of Wateroo. I had to adjust the coordinates to the cities I wanted to display. Originally the code from Google Maps API was locating Australia. The locations are also labelled as location 1 to 7 but these are considered variables. These variables are then used for other purposes. The coding seems straight forward and it's pretty easy to understand.*/
var map;
      function initMap() {
        var location1 = {lat: 43.450301, lng: -80.4831917};

        var location2 = {lat: 43.4642578, lng: -80.5204096};

        var location3 = {lat: 43.3616211, lng: -80.3144276};

        var location4 = {lat: 43.5401220, lng: -80.5535230};

        var location5 = {lat: 43.3834620, lng: -80.6427880};

        var location6 = {lat: 43.4774490, lng: -80.7645880};

        var location7 = {lat: 43.366568, lng: -80.221652};

/* The code here is from the same place as above, Google Maps API. Here is where it will load the Google Maps of the ID called googlemap which is linked in the html file and css. I had to make some adjustments to the zoom, the center. Draggable and scrollwheel were also added to get the desired results. These lines of codes are pretty straight forward. */
        map = new google.maps.Map(document.getElementById('googlemap'), {
          'center' : location1,
          'zoom' : 11,
          'mapTypeId' : google.maps.MapTypeId.ROADMAP,
          'draggable' : false,
          'scrollwheel' : false
        });

/* The codes were used from Google Maps APIs again. https://developers.google.com/maps/documentation/javascript/markers. The tutorial from Lynda.com advised to add the map variable. I changed the value of position and title. These are all marks were a person hovers over the marker it will display the title. These were straight forward and easy to implement.*/
   var marker = new google.maps.Marker({
       'position' : location1,
       'map' : map,
       'title' : 'Kitchener'
   });

   var marker = new google.maps.Marker({
       'position' : location2,
       'map' : map,
       'title' : 'Waterloo'
   });

   var marker = new google.maps.Marker({
       'position' : location3,
       'map' : map,
       'title' : 'Cambridge'
   });

   var marker = new google.maps.Marker({
       'position' : location4,
       'map' : map,
       'title' : 'Township of Woolwich'
   });

   var marker = new google.maps.Marker({
       'position' : location5,
       'map' : map,
       'title' : 'Township of Wilmot'
   });

   var marker = new google.maps.Marker({
       'position' : location6,
       'map' : map,
       'title' : 'Township of Woolwich'
   });

   var marker = new google.maps.Marker({
       'position' : location7,
       'map' : map,
       'title' : 'Township of North Dumfries'
   });
}

/* These are the codes for putting a map of the city of kitchener's web page.*/
var map;
   function initMap1() {

       var location1 = {lat: 43.450301, lng: -80.4831917};

      map = new google.maps.Map(document.getElementById('kitchener'), {
          'center' : location1,
          'zoom' : 12,
          'mapTypeId' : google.maps.MapTypeId.ROADMAP,
    		  'draggable' : false,
		      'scrollwheel' : false
        });

       var marker = new google.maps.Marker({
          'position' : location1,
          'map' : map,
          'title' : 'Kitchener'
       });
}

/* These are the codes for putting a map of the city of Cambridge's web page. */
var map;
   function initMap2() {

       var location1 = {lat: 43.3616211, lng: -80.3144276};

      map = new google.maps.Map(document.getElementById('cambridge'), {
          'center' : location1,
          'zoom' : 12,
          'mapTypeId' : google.maps.MapTypeId.ROADMAP,
    		  'draggable' : false,
		      'scrollwheel' : false
        });

       var marker = new google.maps.Marker({
          'position' : location1,
          'map' : map,
          'title' : 'Cambridge'
       });
}

/* These are the codes for putting a map of the city of Waterloo's web page. */
var map;
   function initMap3() {

       var location1 = {lat: 43.4642578, lng: -80.5204096};

      map = new google.maps.Map(document.getElementById('waterloo'), {
          'center' : location1,
          'zoom' : 13,
          'mapTypeId' : google.maps.MapTypeId.ROADMAP,
    		  'draggable' : false,
		      'scrollwheel' : false
        });

       var marker = new google.maps.Marker({
          'position' : location1,
          'map' : map,
          'title' : 'Waterloo'
       });
}
