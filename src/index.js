// check that everything is working
console.log('I am working!')

const containerEl = document.getElementById('container')
const h1El = document.createElement('h1')

h1El.textContent = 'I am also working!'
containerEl.appendChild(h1El)
