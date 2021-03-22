const btn = document.querySelector('#dark-mode-btn')
const body = document.querySelector('body')
const trending = document.querySelector('.trending-container')
const p = document.querySelector('p')

let darkEnabled = false

if (localStorage.getItem('darkStatus') == 'true') {
  body.classList.add('dark-mode')
  trending.classList.add('trending-dark-mode')
  p.classList.add('p-dark-mode')
} else {
  body.classList.remove('dark-mode')
  trending.classList.remove('trending-dark-mode')
  p.classList.remove('p-dark-mode')
}

btn.addEventListener('click', () => {
  if (darkEnabled == false) {
    darkEnabled = true
    localStorage.setItem('darkStatus', true)
    body.classList.add('dark-mode')
    trending.classList.add('trending-dark-mode')
    p.classList.add('p-dark-mode')
  } else {
    darkEnabled = false
    localStorage.setItem('darkStatus', false)
    body.classList.remove('dark-mode')
    trending.classList.remove('trending-dark-mode')
    p.classList.remove('p-dark-mode')
  }
})
