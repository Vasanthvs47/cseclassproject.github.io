function plus(n){
  showslide(slideIndex += n);
}

function showslide(n){
  let i;
  let slides = document.getElementsByClassName("myslides");

  if( n > slides.length){
    slideIndex = 1
  }
   if( n <= 0){
     slideIndex = slides.length
   }

   for(i = 0 ; i < slides.length ; i++ ){
      slides[i].style.display = "none";
   }

    slides[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
 
function start(){
  let slides = document.getElementsByClassName("myslides");
  slides[0].style.display = "block";
}