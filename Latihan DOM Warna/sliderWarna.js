const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')
sMerah.addEventListener('input', function() {
	const red = sMerah.value
	const green = sHijau.value
	const blue = sBiru.value
	document.body.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')'
})

sHijau.addEventListener('input', function() {
	const red = sMerah.value
	const green = sHijau.value
	const blue = sBiru.value
	document.body.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')'
})

sBiru.addEventListener('input', function() {
	const red = sMerah.value
	const green = sHijau.value
	const blue = sBiru.value
	document.body.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')'
})