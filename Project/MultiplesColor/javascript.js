
function randomColorGenerator(){
   const hex = '0123456789ABCDEF'
   let color = '#'
for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random()*16)]
}
console.log(color)
return color
}



const sw1 = document.getElementById('sw1')
console.log(sw1)
const sw2 = document.getElementById('sw2')
console.log(sw1)
const sw3 = document.getElementById('sw3')
console.log(sw1)
const sw4 = document.getElementById('sw4')
console.log(sw1)



let clear;

document.querySelector('#button1').addEventListener('click', function(e){
   
   clear = setInterval(() => {
    sw1.style.backgroundColor =  randomColorGenerator()
   sw2.style.backgroundColor =  randomColorGenerator()
   sw3.style.backgroundColor =  randomColorGenerator()
   sw4.style.backgroundColor =  randomColorGenerator()
   }, 1000);

})



document.querySelector('#button2').addEventListener('click', function(e){
   clearInterval(clear)
   clear = null
})



