// GLOBAL CONSTANTS




//API endpoints
const gifsearchdivelement= document.querySelector("#gifsearch")
const submitbuttonelement = document.querySelector("#Submit") 
const q = ""
const APIkey = "z9qEJKCAcrrMCA7q77qHJXLDkv111Kra"
const limit= 8
const rating= "g"
const apiUrl= `api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${q}` 

gifsearchdivelement.addEventListener("gifsearch", getResults);
//let response = fetch(apiUrl);
//console.log("response is: ", response);   // a Promise is placeholder for future data

async function getResults(){
    let response = await fetch(apiUrl);
console.log("response is: ", response);   

let responseData = await response.json(); 
console.log("responseData is: ", responseData);   // now have actual data
// (3) grab what we want from results of the pokemon API call, and put it on page
generateHTML(responseData);


}
