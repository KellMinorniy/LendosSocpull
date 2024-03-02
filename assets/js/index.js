

document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            let content = this.nextElementSibling;
            content.classList.toggle('show');
            this.classList.toggle('active');
        });
    });
});



// loader 

window.addEventListener("load", function(){
    var loader = document.getElementById("loader");
    setTimeout(function(){
       loader.style.display = "none";
    }, 3000);
   });

//animate

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
          entry.target.classList.add('visible');
       } else {
          entry.target.classList.remove('visible');
       }
    });
   });
   
   document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
   });

// price 

document.addEventListener("DOMContentLoaded", function() {
    const coins = document.querySelectorAll('.money-container img');
    const animations = ['fall1 5s linear infinite', 'fall2 7s linear infinite', 'fall3 6s linear infinite'];

    const setRandomPositionAndAnimation = (coin) => {
        const randomTop = -(Math.random() * 100 + 50); // Убедитесь, что это значение достаточно для старта сверху
        const randomLeft = Math.random() * 100;
        const randomWidth = Math.random() * 80 + 20;
        const animation = animations[Math.floor(Math.random() * animations.length)];
        coin.style.setProperty('--start-top', `${randomTop}vh`);
        coin.style.setProperty('--start-left', `${randomLeft}%`);
        coin.style.width = `${randomWidth}px`;
        coin.style.animation = animation;
    };

    coins.forEach((coin) => {
        setRandomPositionAndAnimation(coin);
        coin.addEventListener('animationiteration', () => {
            setRandomPositionAndAnimation(coin);
        });
    });
});

// height

document.addEventListener('DOMContentLoaded', function() {
    let networkImage = document.getElementById('network-image');
    let networkMobileImage = document.getElementById('network-mobile-image');
    let priceContainer = document.getElementById('price-container');

    function setPriceContainerSize() {
        let image = window.matchMedia("(max-width:  576px)").matches ? networkMobileImage : networkImage;
        if (image && priceContainer) {
            let imageWidth = image.clientWidth;
            let imageHeight = image.clientHeight;

            priceContainer.style.width = imageWidth + 'px';
            priceContainer.style.height = imageHeight + 'px';
        }
    }

    setPriceContainerSize();

    window.addEventListener('resize', setPriceContainerSize);
});