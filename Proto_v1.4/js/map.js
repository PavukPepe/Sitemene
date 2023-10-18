ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [43.905332154783316, 42.71450989436184], // Координаты центра карты
    zoom: 17 // Масштаб
  });

  var placemark = new ymaps.Placemark([43.905332154783316, 42.71450989436184], {
    hintContent: 'Nogaev', // Всплывающая подсказка
    balloonContent: 'Мы находимся здесь' // Содержимое балуна
  });

  map.geoObjects.add(placemark);
}