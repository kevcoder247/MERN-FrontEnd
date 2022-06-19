$("#addHome").removeClass("btn-danger").addClass("btn-primary");

// const titleEl = document.querySelector('.jumbotron');
// titleEl.style.textAlign = 'center';

$('h1').addClass('text-center');

const isStyled = $("p").hasClass("left-aligned big")
// the isStyled var will be true if any <p> elements have
// the classes of "left-aligned" and "big"

console.log(isStyled)

const $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');
$("body").append($newLink);

$("#zillowLink").attr('target', '_blank')

$("#addHome").on("click", function(evt){
    console.log(this)
});

$("body").on("click", "div.circle", function(){
    console.log(this)
})