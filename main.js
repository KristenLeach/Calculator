// get all elements with .operators class
var operators = document.querySelectorAll(".operators");
// get the "results" id 
var displayResults = document.getElementById("results");
// create string to store the stuff that will get evaluated
var results = "";
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");

// this function takes whatever "results" variable currently is and puts it in the results element on the page
function setResults (){ 
    displayResults.innerHTML = results;
}

function onOperatorClick(event) { // event is mouse event
    var element = event.target; // html element user clicked
    var buttonValue = element.value; // value from the "value" attribute on the element
    results += buttonValue; // add the value to the current results string
    setResults();
}
// Make an array from the list of '.operators' elements and add a click event for each
Array.from(operators).forEach(function(operator){
    operator.addEventListener("click", onOperatorClick);
});

function clearResult(){
    results = "";
    setResults ();
}

clear.addEventListener("click", clearResult);

equals.addEventListener("click", function(){
    results = eval(results);
    setResults ();
})

/*var anotherFunction = function(whateverYouGiveMe) {
    console.log(whateverYouGiveMe);
}
anotherFunction('Im giving it this string');*/
