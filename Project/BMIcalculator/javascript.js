const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  
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