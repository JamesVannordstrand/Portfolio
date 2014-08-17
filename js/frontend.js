$(function() {

  $('#navigation a').stop().animate({'marginLeft':'-85px'},1000);

  $('#navigation > li').hover(
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
  },
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-85px'},200);
  }
 );
});

$(document).ready(function() {
  setInterval ('cursorAnimation()', 600);
});

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'medium', 'swing').animate({
    opacity: 1
  }, 'medium', 'swing');
}

var bio = ["I'm an undergraduate at the University of Northern Iowa. I love learning new things about software and the ways in which you can apply those things to real world problems. So far I love to learn about functional programming the most. My favorite programming language would be Haskell mostly because it isn't like other languages that I have worked with.", "Some of the languages that I know pretty well would be Java, C, Scala, Ada, and Haskell. Some of the languages that I am not as fluent with but have used would be C++, JavaScript, MySQL, Lua, PHP, HTML, CSS, and Python. I'm usually someone that works on back-end components of a system but I'm not opposed to learning front-end components either!", "I'm a very charismatic person who enjoys programming for fun. I'm goal oriented and am very hard working!"];

var homepage = true;

function populateHome() {
  document.getElementById("aSwitch").style.backgroundImage="url('images/contact.png')";
  document.getElementById("aSwitch").title = "Contact Me";
  document.getElementById("p1").innerHTML = bio[0];
  document.getElementById("p2").innerHTML = bio[1];
  document.getElementById("p3").innerHTML = bio[2];
}

function populateAbout() {
  document.getElementById("aSwitch").style.backgroundImage = "url('images/home.png')";
  document.getElementById("aSwitch").title = "Home";
  document.getElementById("p1").innerHTML = "Phone Number: 319-415-2243";
  document.getElementById("p2").innerHTML = "Email: jamesvannordstrand@yahoo.com";
  document.getElementById("p3").innerHTML = "";
}

function switchPage() {
  if (homepage){
    populateAbout();
    homepage = false;
  } else {
    populateHome();
    homepage = true;
  }
}

window.onload = populateHome;