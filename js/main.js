const paragraph1 = document.querySelector("p")

console.log(paragraph1);

const table = document.querySelector('table');
console.log(table)


const paragraphs = document.querySelectorAll('p')

console.log(paragraphs)

console.log(paragraphs[0])

paragraphs.forEach(paragraphs =>{
  console.log(paragraphs)
})

mj = document.querySelector('.Jordan')

console.log(mj)

const l = document.getElementsByClassName('Left')

console.log(l);
const people = ['Lebron', 'Kobe', 'Jordan']

const paragraphs2 = document.getElementsByTagName('p')
 console.log(paragraphs2)




console.log(paragraphs2[1]);


let paraChanger = document.querySelector('p');
console.log(paraChanger.innerText);

paraChanger.innerText = 'I Just changed this text';

 const paraChangers = document.querySelectorAll('p');
 paraChangers.forEach(paraChangers =>{
   console.log(paraChangers.innerText);
 })

const content = document.querySelector('.content');
 content.innerHTML ='<h2> THIS IS THE NEW H2 I ALTERED THE TEXT</h2>'


people.forEach(person =>{
  content.innerHTML +=`<p>${person}</p>`
})

const link =document.querySelector('a')
console.log(link.getAttribute('href'));
 link.setAttribute('href','https://www.youtube.com/');
