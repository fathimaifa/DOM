const judul = document.getElementById('judul')
judul.innerHTML = '<em>fathimaifa</em>'
judul.style.color = 'pink'
judul.style.backgroundColor = 'brown'

judul.addEventListener('mouseenter', function() {
	judul.style.backgroundColor = 'salmon'
})

judul.addEventListener('mouseleave', function() {
	judul.style.backgroundColor = 'brown'
})