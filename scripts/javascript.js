

  
    
  
  
    



  
  
   


    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }



 function change(){
    document.getElementById("changenav").style.backgroundColor=" red";
 }
 function bigImg(x) {

    x.style.backgroundColor ="#aaa205";
    document.getElementById("txt").style.color=" white";
    var abb=document.getElementById("ss");
    abb.style.color="#083b66";
    }

function normalImg(x) {

x.style.backgroundColor = "#083b66";
document.getElementById("txt").style.color="#aaa205";
var abb=document.getElementById("ss");
    abb.style.color="#aaa205";


}
var navlinks=document.getElementById("navlinks");
function showMenu(){
    navlinks.style.right="0";
}

function hideMenu(){
   navlinks.style.right="-200px";
}


/* function for nwxt and prior*/
const backgroundImages = [
    'url(../pictures/Black.jpg)',
    'url(../pictures/nwana.jpg)',


];

let currentImageIndex = 0;

function updateBackground() {
    document.querySelector('.header').style.backgroundImage = backgroundImages[currentImageIndex];
}

document.getElementById('prevButton').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
    updateBackground();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    updateBackground();
});


