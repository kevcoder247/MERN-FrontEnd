// how to request data from an api

//there are many ways to do this
// 1.JQuery $Ajay() function
//2.The browser fetch function
//3.Using the Axios http client

//VARIABLES
// const URL = 
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t="
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rating');
const $form = $('form');
const $input = $(`input[type="text"]`)

//ELEMENT REFERENCES
$form.on('submit', handleGetData)

//FUNCTIONS

function handleGetData(event){
    event.preventDefault()
    const userInput = $input.val();

    $.ajax(URL + userInput).then(function (data){
        console.log('movie data is ready')
        console.log(data)
        $title.text(data.Title)
        $year.text(data.Year)
        $rating.text(data.Rated)
        $('main').append(`<img src="${data.Poster}"/>`)
    }, function(error) {
        console.log('something is wrong')
        console.log(error)
    })   
}
