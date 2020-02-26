const close = document.querySelector('a')

close.addEventListener('click', function(e) {
	close.parentElement.style.display = 'none'
	// e.target.parentElement.style.display = 'none'. jadi bisa pake yang atas atau yang bawah karena e.target = close. da e itu event tersebut yang bentuknya adalah sebuah object. yang salah satu propertinya adalah target. dan target itu adalah si yang di clicknya.
	e.preventDefault()
})