// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

/** BACK TO TOP BUTTON **/

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$('#form-submit').on('click', function (event) {
  event.preventDefault();
  let name=document.getElementById("name").value;
  let subject = 'Quote Request';
  let email= document.getElementById("email").value;
  let phone= document.getElementById("phone").value;
  let message= document.getElementById("message").value;
  let mail="mailto:hrdndablek@gmail.com?";
  window.open(mail+subject+'&body= name : '+name+' phone :'+phone+' email :'+email+' message : '+message);
});