var inkbox = document.getElementById("inked-painted");

var colorbox = document.getElementById("colored");

var fillerImage = document.getElementById("inked");

inkbox.addEventListener("mousemove", trackLocation, false);
inkbox.addEventListener("touchstart", trackLocation, false);
inkbox.addEventListener("touchmove", trackLocation, false);

function trackLocation(e) {
	var rect = fillerImage.getBoundingClientRect();
	var position = ((e.pageX - rect.left) / fillerImage.offsetWidth) * 100;
	if (position <= 100) {
		colorbox.style.width = position + "%";
	}
}

//---------------------------------------------//



var bannerLeft = document.querySelector('.banner-left')
var bannerRight = document.querySelector('.banner-right')
var windowInner = document.querySelector('.screem')
var parallax = document.querySelector('.attachedParallax')


function scrolls() {
	var scrollable = document.documentElement.scrollHeight - window.innerHeight
	var scrolledBotton = window.scrollY + window.innerHeight

	console.log(scrollable);
	console.log(scrolledBotton);

	if (scrolledBotton > 960) {
		bannerLeft.style.opacity = 1;
		bannerRight.style.opacity = 1;
		bannerLeft.style.visibility = 'visible';
		bannerRight.style.visibility = 'visible';
	}

	if (scrolledBotton < 960) {
		bannerLeft.style.opacity = 0;
		bannerRight.style.opacity = 0;
		bannerLeft.style.visibility = 'hidden';
		bannerRight.style.visibility = 'hidden';
	}

	if (scrolledBotton > 1655){
		parallax.style.opacity = 1;
		parallax.style.visibility = 'visible';
	}

	if (scrolledBotton < 1655){
		parallax.style.opacity = 0;
		parallax.style.visibility = 'hidden';
	}



		// if( scrolledBotton > 960   && scrolledBotton < 1655){
		// 	bannerLeft.style.opacity = 1;
		// 	bannerRight.style.opacity = 1;
		// 	bannerLeft.style.visibility = 'visible';
		// 	bannerRight.style.visibility = 'visible';

		// }else if( scrolledBotton > 1655){
		// 	parallax.style.display = 'block';
		// }	

		// if( scrolledBotton < 1655 &&  scrolledBotton > 959){
		// 	parallax.style.display = 'none';
		// }else if(scrolledBotton < 959){
		// 	bannerLeft.style.display = 'none';
		// 	bannerRight.style.display = 'none';

		// }



	}

	window.addEventListener('scroll', scrolls)