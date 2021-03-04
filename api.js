const apiKey = "O2nUKxzL8f8GL44CGQ3ml1AVeRMmdBbP"
const url = "https://api.giphy.com/v1"

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
  let card = document.createElement("div")
  card.className = cardId
  let img = document.createElement("img")
  img.src = src
  card.appendChild(img)
  container.appendChild(card)
}

// TRENDING SECTION ----------------------------------------------------------------------------------

// 6 de carne fritas
// 2 verdura al horno
// 1 jamon y queso frita

let urlTrending = `${url}/gifs/trending?api_key=${apiKey}`

request(urlTrending)
  .then((content) => {
    // Shows the first 10 results of the trending gifs
    let container = document.querySelector("#trending")
    for (let i = 0; i <= 10; i++) {
      createCard(
        content.data[i].images.downsized.url,
        container,
        "gif-container"
      )
    }
  })
  .catch((error) => {
    console.error(error)
  })

// SEARCH BOX ----------------------------------------------------------------------------------
const userInput = document.querySelector("#txt-search")
const searchBtn = document.querySelector("#btn-search")

function getSearch() {
  let urlSearch = `${url}/gifs/search?api_key=${apiKey}&q=${userInput.value}`
  request(urlSearch)
    .then((content) => {
      let container = document.querySelector("#result")
      for (let i = 0; i <= 11; i++) {
        createCard(
          content.data[i].images.downsized.url,
          container,
          "gif-container"
        )
      }
    })
    .catch((error) => {
      console.error(error)
    })
  document.querySelector("#result").innerHTML = ""
  document.querySelector(".show-more").classList.add("display-show-more")
}

userInput.addEventListener("keyup", (event) => {
  console.log("keyup")
  if (event.keyCode === 13) {
    getSearch(userInput.value)
  }
})

searchBtn.addEventListener("click", () => {
  getSearch(userInput.value)
})

// SUGGESTED CATEGORIES

// let urlCategories = `${url}/trending/searches?api_key=${apiKey}`
// request(urlTrending)
//   .then((content) => {
//     for (let i = 0; i <= 4; i++) {
//       let apiArray = content.data[i].images.downsized.url

//       console.log(apiArray)
//       // JSON.stringify(apiArray)
//       // apiArray.textContent = content.data[i].stringify
//       // console.log(apiArray)
//       // document.querySelector("#suggestions").appendChild(apiArray)
//     }
//   })
//   .catch((error) => {
//     console.error(error)
//   })
