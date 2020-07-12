document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        });
    });
    }
  });
  
  
  // convém estar no onload da janela
window.onload = function()
{
  var banner =  document.getElementById('banner_carousel');
  // console.info(banner.src);
  // primeiro tens de sacar a dimensão da janela
  // neste caso a área visível do browser
  var largura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // depois é brincar com if's e colocar o banner que queiras:

  if(largura>=1440)
  {
    banner.src = 'img/banner_drogstore_large_1440.png';
    //console.info(banner.src);
  } else {
    banner.src = 'img/banner_drogstore_large_1024.png';
    //console.info(banner.src);
  }
} // fim do window.onload

function sizeOfThings(){
    
    var screenWidth = screen.width;

    var banner =  document.getElementById('banner_carousel');
    //console.log(banner);

    if(screen.width>=1440){
        banner.src = "img/banner_drogstore_large_1440.png";
        console.log(banner.src);
    }if(screen.width>=1024  && screen.width<1440){
        banner.src = "img/banner_drogstore_large_1024.png";
        console.log(banner.src);
        console.log("1024");
    }if(screen.width>=768  && screen.width<1024){
        banner.src = "img/banner_drogstore_large_768.png";
        console.log(banner.src);
        console.log("768");
    }if(screen.width>=320  && screen.width<768){
        banner.src = "img/banner_drogstore_large_400.png";
        console.log(banner.src);
        console.log("400");
    }
    
    //document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
    //document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;
  
  };
  sizeOfThings();
  
  window.addEventListener('resize', function(){
      sizeOfThings();
  });