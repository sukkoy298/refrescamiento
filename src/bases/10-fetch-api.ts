import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'JYXFJ57CwF1wwqOTB2Faipu5sV7NSnhp'

const myrequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

myrequest
.then((response) => response.json())
.then(({data}: GiphyRandomResponse) => {
    
    const imageUrl = data.images.original.url;
    console.log(imageUrl);


    /*const imageUrl = data.data.images.original.url;
    console.log(imageUrl);*/

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    document.body.append(imgElement);
})
.catch((err) => console.error(err));