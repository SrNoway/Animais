const imgs = document.querySelectorAll('img')

let i = 0;
imgs.forEach((item) => {
   //console.log(i++)
});

const allParagrafos = document.querySelectorAll('p')

allParagrafos.forEach((item) => {
    //console.log(item.innerText)
});


const img = document.querySelector('img');
//console.log(img.getAttribute('alt'))


const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
    console.log('usuario mobile');
} else {
    console.log('usuario Desktop');
}

//console.log(small)

const primeiraImg = document.querySelector('img')
const imgTop = img.offsetTop;

//console.log(imgTop)

const imagens = document.querySelectorAll('img')

imagens.forEach((imagem) => {
    console.log(imagem.offsetWidth)

});








