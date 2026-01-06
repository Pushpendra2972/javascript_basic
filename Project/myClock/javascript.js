const time = document.querySelector('#clock')


setInterval(function(){
  let myTime = new Date()
  time.innerHTML = myTime.toLocaleTimeString()
}, 1000)
 
