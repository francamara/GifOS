let apiKey = "O2nUKxzL8f8GL44CGQ3ml1AVeRMmdBbP"
let url = "https://api.giphy.com/v1/gifs"

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

// TRENDING SECTION ----------------------------------------------------------------------------------

// 6 de carne fritas
// 2 verdura al horno
// 1 jamon y queso frita

let urlTrending = `${url}/trending?api_key=${apiKey}`

request(urlTrending)
  .then((content) => {
    // Shows the first 10 results of the trending gifs
    for (let i = 0; i <= 10; i++) {
      let fig = document.createElement("figure")
      let img = document.createElement("img")
      document.querySelector("#search").innerHTML = ""
      img.src = content.data[i].images.downsized.url
      document.querySelector("#trending").appendChild(fig).appendChild(img)
    }
  })
  .catch((error) => {
    console.error(error)
  })

// SEARCH BOX ----------------------------------------------------------------------------------

let urlSearch

function userSearch() {
  let userSearch = document.querySelector("#user-search")
  userSearch.addEventListener("click", () => {
    let userInput = document.querySelector("#user-input")
    let urlSearch = `${url}/search?api_key=${apiKey}&q=${userInput.value}`
    document.querySelector("#search").innerHTML = ""
    request(urlSearch)
      .then((content) => {
        for (let i = 0; i <= 10; i++) {
          let fig = document.createElement("figure")
          let img = document.createElement("img")
          img.src = content.data[i].images.downsized.url
          document.querySelector("#search").appendChild(fig).appendChild(img)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  })
}

userSearch()
