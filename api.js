let apiKey = "O2nUKxzL8f8GL44CGQ3ml1AVeRMmdBbP";

// TRENDING

// TEST: https://api.giphy.com/v1/gifs/trending?&api_key=O2nUKxzL8f8GL44CGQ3ml1AVeRMmdBbP

let url = `https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`;

console.log(url)
async function getData() {
    const response = await fetch(url);
    const content = await response.json();
    // Aca se busca la data dentro del json del api, data > data 0
    console.log(content.data[0].images.downsized.url);
    // Shows the first 10 results of the trending gifs
    for (let i = 0; i <= 10; i++) {
        // Figure creates the container where the img is gonna be displayed
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        // img.src changes the source of the image
        img.src = content.data[i].images.downsized.url;
        document.querySelector('.out').appendChild(fig).appendChild(img);
    }
}


getData(); 