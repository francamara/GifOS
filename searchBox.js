const searchBox = document.querySelector('#txt-search')
const iconToChange = document.querySelector('#icon-search')

searchBox.addEventListener('keyup', () => {
  if (searchBox.value != '') {
    iconToChange.src = '/assets/close.svg'
  } else {
    iconToChange.src = '/assets/icon-search.svg'
  }
})
