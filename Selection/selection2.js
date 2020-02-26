// 4. document.querySelector() -> mengembalikan element
// const p4 = document.querySelector('#b p');
// p4.innerHTML = 'diubah oleh querySelector'

// const li2 = document.querySelector('#b ul li:nth-child(2)')
// li2.style.color = 'green'
// li2.innerHTML = 'list ini di ubah oleh querySelector'



// 5. document.querySelectorAll() -> mengembalikan nodeList
// const p = document.querySelectorAll('li')
// for (let i=0; i<p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue'
// }



// 6. mengubah node root
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p');
p4.innerHTML = 'ini ditangkap pake cara mengubah node root'

// atau bisa juga
const sectionA = document.querySelector('#a');
const p1 = sectionA.getElementsByTagName('p')[1];
p1.innerHTML = 'ini ditangkap pake cara mengubah node root'