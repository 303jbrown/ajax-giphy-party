const div = document.getElementById('Gifs');
    // create a new div to hold the giphy
const newGif = document.createElement('div');

async function makeGif(term){
    const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    console.log(result);
  addGiphy(result.data.data);    
}

//Add giphs to the page 
function addGiphy(data){    
//determine what random gif to add to the dive
//make sure the result has data 
if (data.length !== 0){
    // create an image 
    const newImg = document.createElement("img");
    let ran = Math.floor(Math.random() * data.length);
    newImg.src = data[ran].images.original.url;
div.append(newGif, newImg);
}
else{
   alert('No Results Found') 
}} 
//Access submit button 
const button = document.querySelector("#submit")
//When submit button is hit take input data to use in makeGif function 
button.addEventListener("click", function(e){
    e.preventDefault();
    const inputTerm =document.querySelector("#searchTerm");
    console.log(inputTerm.value);
    makeGif(inputTerm.value);
    //rest input 
    inputTerm.value= "";
});

//When clear Button is clicked all gifs are removed 
const clearBnt = document.querySelector("#remove");
clearBnt.addEventListener("click",function(event){
$("#Gifs").empty();
}); 