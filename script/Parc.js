const body = document.querySelector('body')
const containers = document.querySelector('.containers')
const images = ['1708429233847.jpg','1708429242870.jpg','1708429340200.jpg','1708429357436.jpg','1708429376870.jpg','1708429382571.jpg','1708429413273.jpg','1708429423248.jpg','1708429447363.jpg','1708429459377.jpg','1708429478891.jpg','1708429486985.jpg','1708429494943.jpg','1708429501336.jpg','1708429552520.jpg']
for (let i = 0; i < images.length; i++) {
     const box = document.createElement('div')
     const img = document.createElement('img')
     box.classList.add('box')
     img.src = `../image/isalo/${images[i]}`
     box.appendChild(img)
     containers.append(box)
}


const content = document.querySelector('.content') 
const images_ranomafana = ['1708429788760.jpg','1708429722135.jpg','1708429762471.jpg','1708429765964.jpg','1708429773226.jpg','1708429870987.jpg','1708429849133.jpg']
for (let i = 0; i < images_ranomafana.length; i++) {
     const box = document.createElement('div')
     const img = document.createElement('img')
     box.classList.add('box')
     img.src = `../image/Ranomafana/${images_ranomafana[i]}`
     box.appendChild(img)
     content.appendChild(box)
}

const content_2 = document.querySelector('.content-2')
content_2.classList.add('containers') 
const images_andringitra = ['1708428554175.jpg','1708428781023.jpg','1708428785139.jpg','1708428791394.jpg','1708428814427.jpg','1708428825923.jpg','1708428872778.jpg']
for (let i = 0; i < images_andringitra.length; i++) {
     const box = document.createElement('div')
     const img = document.createElement('img')
     box.classList.add('box')
     img.src = `../image/Andringitra/Parc/${images_andringitra[i]}`
     box.appendChild(img)
     content_2.appendChild(box)
}


