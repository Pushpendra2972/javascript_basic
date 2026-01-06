const form = document.querySelector('form')

const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const result = document.querySelector('#results')

form.addEventListener('submit', function(e){
  e.preventDefault()
   
  const height = parseInt(heightInput.value)
  const weight = parseInt(weightInput.value)

  if( height < 0 || isNaN(height)){
    result.innerHTML = 'please give me a valid height'
   
  }
  else if(weight < 0 || isNaN(weight)){
    result.innerHTML = 'please give me a valid weight'
  }
  else{
   const bmi = (weight / ((height * height) / 10000)).toFixed(2)
   if(bmi < 18.6){
    result.innerHTML = `<span>Under Weight<span/>`
     
   }
   else if(bmi < 24.9){
    result.innerHTML = `<span>Normal Range<span/>`
   }
   else{
    result.innerHTML = `<span>Overweight<span/>`
   
   }
   
  }
})


const clearButton = document.querySelector('#clear')

clearButton.addEventListener('click', function (e) {
   e.preventDefault()
  heightInput.value = ''
  weightInput.value = ''
  result.innerHTML = ''
})


