// posisi mouse
	// console.log(e.clientX)

	//ukuran browser
	// console.log(window.innerWidth)
document.body.addEventListener('mousemove', function(e) { // e disitu adalah object buat nangkep client mousenya. e untuk event
	const xPos = Math.round((e.clientX/window.innerWidth)*255)
	const yPos = Math.round((e.clientY/window.innerHeight)*255)
	document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', 100)'
})