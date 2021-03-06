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

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'medium', 'swing').animate({
    opacity: 1
  }, 'medium', 'swing');
}

var bio = ["I'm an undergraduate at the University of Northern Iowa. I love learning new things about software and the ways in which you can apply those things to real world problems. So far I love to learn about functional programming the most. My favorite programming language would be Haskell mostly because it isn't like other languages that I have worked with.", "Some of the languages that I know pretty well would be Java, C, Scala, Ada, and Haskell. Some of the languages that I am not as fluent with but have used would be C++, JavaScript, MySQL, Lua, PHP, HTML, CSS, and Python. I'm usually someone that works on back-end components of a system but I'm not opposed to learning front-end components either!", "I'm a very charismatic person who enjoys programming for fun. I'm goal oriented and am very hard working!"];
var contact = ["Phone Number: 319-415-2243", "Email: jamesvannordstrand@yahoo.com", ""];
var homepage = true;

function populateHome() {
  for (var i = 1; i < 4; i++) {
    id = '#p' + i;
    $(id).fadeTo("medium", 0.01);
    $(id).html(bio[i-1]);  
    $(id).fadeTo("medium", 1.00);
  };
  $('#cursorP').css({"padding-bottom" : "0px"});
}

function populateAbout() {
  for (var i = 1; i < 4; i++) {
    id = '#p' + i;
    $(id).fadeTo("medium", 0.01);
    $(id).html(contact[i-1]);  
    $(id).fadeTo("medium", 1.00);
  };
  $('#cursorP').css({"padding-bottom" : "261px"});
}

function switchPage() {
  if (homepage){
    populateAbout();
    homepage = false;
    eraseThenType("#switchText", "Home");
  } else {
    populateHome();
    homepage = true;
    eraseThenType("#switchText", "Contact");
  }
}

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    body = document.body;

showLeft.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
};


// erasing and typing paragraphs
function eraseThenType(id, cap) {
  captionEl     = $(id);
  oldCaption    = captionEl.html();
  newCaption    = cap;
  captionLength = oldCaption.length;

  erase()
  setTimeout('type()', 500);
}

function erase() {
  captionEl.html(oldCaption.substr(0, captionLength--));
  if(captionLength >= 0) {
    setTimeout('erase()', 25);
  } else {
    captionLength = 0;
  }    
}
 
function type() {
  captionEl.html(newCaption.substr(0, captionLength++));
  if(captionLength < newCaption.length+1) {
    setTimeout('type()', 25);
  } else {
    captionLength = 0;
  }
}
///////////////////////////

$(document).ready(function() {
  setInterval ('cursorAnimation()', 600);
  populateHome();
});