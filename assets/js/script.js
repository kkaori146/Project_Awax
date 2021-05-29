showSlides();
function showSlides() {
  
  // Crio uma variável qualquer para o laço for //
  var i;
  
  // Pego os valores das classes slide e pointer e armazeno nas variaveis sliders e dots //
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  // Faço o laço for e verifico se o display: none; está no css do slide //
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // incrementa o laço para +1 se a condição for aceita //
  slideInicial++;
  
  // Verifico se slideInicial é maior que o tamanho obtido no laço e dou valor de 1 //
  if (slideInicial > slides.length) {
    slideInicial = 1
  }    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
  
   setTimeout(showSlides, 8000); 
}

function slideAtual(n) {
  selecionarSlide(slideInicial = n);
}

function selecionarSlide(n) {
  
  var i;
  
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  if (n > slides.length) {slideInicial = 1}    
  if (n < 1) {slideInicial = slides.length}
  
 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
 
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
 
  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
}
