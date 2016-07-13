var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var modal = document.querySelector('.modal');
//this is to open the modal for the headline to become a modal

var headline = document.querySelector('.headline');

headline.onclick = function() {
  modal.style.display ='block';
}

//this is to close the modal for 

var closebtn = document.querySelector('.modal .closebtn');

closebtn.onclick = function() {
  modal.style.display = 'none';
};


var record = document.querySelector('.record');
record.onmousedown = function(){
  record.style.animationPlayState = 'paused';
}
record.onmouseup = function(){
  record.style.animationPlayState = 'running';
}