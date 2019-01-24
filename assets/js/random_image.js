$(function() {
  var images = [
    'temp-truck.jpg',
    'stations-01.jpg',
    'stations-02.jpg',
    'eta-497.jpg',
    'er-493.jpg',
    'two-trucks.jpg',
    'IMG_0147.JPG',
    'IMG_0191.JPG',
    'IMG_8583.JPG',
  ];

	$('<img src="assets/img/home-rotate/' + images[Math.floor(Math.random() * images.length)] + '" width=100% >').appendTo('#banner');
});
