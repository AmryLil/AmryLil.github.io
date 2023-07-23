function update_op(){
    const select=document.getElementById("option");
    const input=document.getElementById("pilih");
    input.value=select.value;
}

function ubahpanjang(){
    var div=document.getElementById("lokasi");
    var lebarlyr=window.innerWidth;

    if (lebarlyr >= 768){
        div.style.height='800px';

    }else{
        div.style.height='1500px';
    }
}

window.addEventListener('load', ubahpanjang);
window.addEventListener('resize',ubahpanjang);

function scrollToContent() {
    var content = document.getElementById("konten");
    content.scrollIntoView({ behavior: 'smooth' });
  }

function scrollToContent2() {
    var content = document.getElementById("cls_tx");
    content.scrollIntoView({ behavior: 'smooth' });
  }

function scrollToContent3() {
    var content = document.getElementById("our");
    content.scrollIntoView({ behavior: 'smooth' });
  }

  var images = [
    { src:'images1.jfif', alt:'Gambar 1' },
    { src:'images2.jpg', alt:'Gambar 2' },
    { src:'images3.jpeg', alt: 'Gambar 3' }
  ];
  
  var currentImage = 0;
  var image = document.getElementById("gambar");
  
  function changeImage() {
    image.src = images[currentImage].src;
    image.alt = images[currentImage].alt;
    
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
  }
  
setInterval(changeImage, 1000);
  