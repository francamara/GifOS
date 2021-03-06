const apiKey = 'O2nUKxzL8f8GL44CGQ3ml1AVeRMmdBbP'
const url = 'https://api.giphy.com/v1'

// API REQUEST FUNCTION ----------------------------------------------------------------------------------

function request(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        return resolve(response)
      })
      .catch((error) => reject(error))
  })
}

function createCard(src, container, cardId) {
  const card = document.createElement('div')
  card.className = cardId
  const favBtn = document.createElement('img')
  favBtn.src = '/assets/icon-fav.svg'
  favBtn.className = 'fav-btn'
  const downloadBtn = document.createElement('div')
  downloadBtn.className = 'download-btn'
  // Desktop Hover Animation
  card.addEventListener('mouseover', () => {
    card.classList.add('card-hover')
  })
  card.addEventListener('mouseout', () => {
    card.classList.remove('card-hover')
  })
  // Mobile Single Gif Card Menu
  card.addEventListener('click', () => {
    card.classList.toggle('card-click-mobile')
  })
  const img = document.createElement('img')
  img.src = src
  card.appendChild(img)
  container.appendChild(card)
  container.appendChild(favBtn)
  container.appendChild(downloadBtn)
}

// TRENDING SECTION ----------------------------------------------------------------------------------

// 6 de carne fritas
// 2 verdura al horno
// 1 jamon y queso frita

const urlTrending = `${url}/gifs/trending?api_key=${apiKey}`

request(urlTrending)
  .then((content) => {
    // Shows the first 10 results of the trending gifs
    const container = document.querySelector('#trending')
    for (let i = 0; i <= 10; i++) {
      createCard(
        content.data[i].images.downsized.url,
        container,
        'gif-container'
      )
    }
  })
  .catch((error) => {
    console.error(error)
  })

// SEARCH BOX ----------------------------------------------------------------------------------
const userInput = document.querySelector('#txt-search')
const searchBtn = document.querySelector('#btn-search')

function getSearch() {
  let urlSearch = `${url}/gifs/search?api_key=${apiKey}&q=${userInput.value}`
  console.log(urlSearch)
  request(urlSearch)
    .then((content) => {
      let container = document.querySelector('#result')
      for (let i = 0; i <= 11; i++) {
        createCard(
          content.data[i].images.downsized.url,
          container,
          'gif-container'
        )
      }
    })
    .catch((error) => {
      console.error(error)
    })
  document.querySelector('#result').innerHTML = ''
  document.querySelector('.show-more').classList.add('display-show-more')
}

userInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    getSearch(userInput.value)
  }
})

searchBtn.addEventListener('click', () => {
  getSearch(userInput.value)
})

// SUGGESTIONS

// https://api.giphy.com/v1/gifs/search/tags?api_key=O2nUKxzL8f8GL44CGQ3ml1AVeRMmdBbP&q=uni

userInput.addEventListener('keydown', () => {
  let query = userInput.value
  let currentInput = []
  currentInput.push(query)
  const urlSuggestions = `${url}/gifs/search/tags?api_key=${apiKey}&q=${currentInput}`
  const suggestionsList = document.querySelector('.suggested-search')
  suggestionsList.innerHTML = ''
  let results = []
  console.log(results)

  if (currentInput[0] != '') {
    request(urlSuggestions).then((content) => {
      results.push(content)
      for (i = 0; i <= 3; i++) {
        const suggestion = document.createElement('li')
        suggestion.textContent = results[0].data[i].name
        suggestionsList.appendChild(suggestion)
      }
    })
  }
})
