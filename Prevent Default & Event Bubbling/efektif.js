// biar kalau kita mau nambahin card baru dari webnya (bukan dari htmlnya) maka closenya sudah otomatis terpasang eventnya
const container = document.querySelector('.container')
container.addEventListener('click', function(e) {
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none'
	}
})