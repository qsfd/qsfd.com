$(function() {
	var images = ['temp-truck.jpg', 'stations-01.jpg', 'stations-02.jpg', 'eta-497.jpg', 'er-493.jpg', 'two-trucks.jpg'];
	$('<img src="assets/img/home-rotate/' + images[Math.floor(Math.random() * images.length)] + '" width=100% >').appendTo('#banner');
});
