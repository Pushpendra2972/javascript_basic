window.addEventListener('keydown', function (e) {
  document.getElementById('one').innerHTML = e.key === ' '? 'space' : e.key;
  document.getElementById('two').innerHTML = e.keyCode;
  document.getElementById('three').innerHTML = e.code;
})
