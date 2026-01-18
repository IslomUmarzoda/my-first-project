const texts = [
  "Гитары ручной работы",
  "Ремонт и обслуживание",
  "Эксклюзивные модели",
];

const topics = [
  "Заказал эксклюзивную электрогитару — звук просто взрывает мозг! Ни <br>" +
  "одна серийная модель не даёт такой чёткости на высоких gain. Мастер <br>" +
  "чувствует, что нужно музыканту. Теперь это мой основной инструмент на <br>" +
  "концертах",

  "Искал «свой» звук 10 лет — нашёл в вашей мастерской. Гитара лёгкая, но <br>" +
  "с невероятным резонансом. И как она красива... Спасибо за магию!"
];

let index = 0;
const h1 = document.getElementById("rotating-text");
const p = document.getElementById("rotating-topic");

function rotateText() {
  h1.style.opacity = 0;
  p.style.opacity = 0;

  setTimeout(() => {

    h1.textContent = texts[index % texts.length];


    p.innerHTML = topics[index % topics.length];

    h1.style.opacity = 1;
    p.style.opacity = 1;

    index++;
  }, 500);
}


rotateText();
setInterval(rotateText, 5000);
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 2;

  function updateCarousel() {
    items.forEach((item, index) => {
      const position = index - currentIndex;

      item.style.transform = '';
      item.style.zIndex = '';
      item.style.opacity = '1';

      if (position === 0) {
        item.style.transform = 'translateX(0) scale(1.2) rotate(-7deg)';
        item.style.zIndex = '3';
      } else if (position === -1 || position === 1) {
        const direction = position === -1 ? -90 : 43;
        item.style.transform = `translateX(${direction}%) scale(0.6) rotate(-44deg)`;
        item.style.zIndex = '2';
        item.style.opacity = '1';
      } else if (position === -2 || position === 2) {
        const direction = position === -2 ? 0 : 0;
        item.style.transform = `translateX(${direction}%) scale(0.6)`;
        item.style.zIndex = '0';
        item.style.opacity = '0.0';
      } else {
        item.style.opacity = '0';
        item.style.zIndex = '0';
      }
    });
  }

  function moveToNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function moveToPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  nextBtn.addEventListener('click', moveToNext);
  prevBtn.addEventListener('click', moveToPrev);

  updateCarousel();

  let startX = 0;
  let endX = 0;

  carousel.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', function (e) {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', function () {
    let diff = endX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        moveToNext();
      } else {
        moveToPrev();
      }
    }
    startX = 0;
    endX = 0;
  });

  let isDragging = false;
  let mouseStartX = 0;
  let mouseEndX = 0;

  carousel.addEventListener('mousedown', function (e) {
    isDragging = true;
    mouseStartX = e.clientX;
  });

  carousel.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    mouseEndX = e.clientX;
  });

  carousel.addEventListener('mouseup', function () {
    if (!isDragging) return;
    let diff = mouseEndX - mouseStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        moveToNext();
      } else {
        moveToPrev();
      }
    }
    isDragging = false;
    mouseStartX = 0;
    mouseEndX = 0;
  });

  carousel.addEventListener('mouseleave', function () {
    isDragging = false;
    mouseStartX = 0;
    mouseEndX = 0;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const links = document.querySelectorAll('.pages a');

  toggleBtn.addEventListener('click', () => {
    links.forEach(link => {
      link.classList.toggle('show');
    });
  });
});

