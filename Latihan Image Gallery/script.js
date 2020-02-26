const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo')
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function(e) {
	//cek apakah yang diketik adalah thumb
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src
		
		setTimeout(function() {
			jumbo.classList.add('fade')
		}, 500)

		thumbs.forEach(function(thumb) {
			// if (thumb.classList.contains('active')) {
			// 	thumb.classList.remove('actiive')
			// }
			thumb.className = 'thumb'
		})

		e.target.classList.add('active')
	}
})