// kalau kita mau nambahin event di card nya, sedangkan kita juga punya event di closenya, maka ketika kita klik close, selain event dari close itu sendiri, event yang nempel pada card juga akan muncul.

const cards = document.querySelectorAll('.card')
cards.forEach(function(card) {
	card.addEventListener('click', function(e) {
		alert('ini adalah event dari card')
	})
})

// kalau si close ini diklik. maka akan muncul juga event dari card.
const close = document.querySelectorAll('.close')
close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		// pake traversal buat nyentuh si cardnya untuk ngilangin. kalau ga pake traversal, si cardnya harus di tangkep dulu pake const dan query.
		e.target.parentElement.style.display = 'none'
		// kenapa? karena close adalah child dari card, jadi otomatis close itu bagian dari card, dan ketika kita klik maka js taunya kita ngeklik si cardnya, soalnya kan close itu ada di dalem card. dan apa pun yang ada di dalem card, mau img, mau tulisan nama aku, mau no telp, pasti pas di klik akan munculin event dari si cardnya. so, biar itu ga terjadi, maka pake lah konsep event bubbling, caranya:
		e.stopPropagation()
		// yang dikasih methodnya e nya yah, soalnya e disini adalah parameter si function yang merupakan event dari function tersebut. jangan closenya, tapi e nya yang dikasih method.
	})
})


