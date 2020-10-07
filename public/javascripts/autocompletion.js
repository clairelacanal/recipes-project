let ingredients = ['Chicken','Tomatoes','banana','zucchini','cheese'];
  
var $input1 = document.getElementById('ingredients-search-1');
var $input2 = document.getElementById('ingredients-search-2');
var $input3 = document.getElementById('ingredients-search-3');

var $suggestions1 = document.getElementById('suggestions-input-1')
var $suggestions2 = document.getElementById('suggestions-input-2')
var $suggestions3 = document.getElementById('suggestions-input-3')

$input1.addEventListener('input', function(){
  const input = $input1.value;
  
  $suggestions1.innerHTML = '';
  const suggestions = ingredients.filter(ingredient => ingredient.toLowerCase().includes(input));
  console.log(suggestions)

  suggestions.forEach(suggested =>{
    const div = document.createElement('div');
    div.innerHTML = suggested;
    div.setAttribute('class', 'suggestion1')
    $suggestions1.appendChild(div);
  })

  if(input === '') {
    $suggestions1.innerHTML = '';
  }
})

document.addEventListener('click', function(e) {
if(e.target.className === "suggestion1") {
  console.log(e.target.innerHTML)
  $input1.value = e.target.innerHTML;
  $suggestions1.innerHTML = '';
}
})

$input2.addEventListener('input', function(){
const input = $input2.value;

$suggestions2.innerHTML = '';
const suggestions = ingredients.filter(ingredient => ingredient.toLowerCase().includes(input));
console.log(suggestions)

suggestions.forEach(suggested =>{
  const div = document.createElement('div');
  div.innerHTML = suggested;
  div.setAttribute('class', 'suggestion2')
  $suggestions2.appendChild(div);
})

if(input === '') {
  $suggestions2.innerHTML = '';
}
})

document.addEventListener('click', function(e) {
if(e.target.className === "suggestion2") {
  console.log(e.target.innerHTML)
  $input2.value = e.target.innerHTML;
  $suggestions2.innerHTML = '';
}
})

$input3.addEventListener('input', function(){
const input = $input3.value;
  
  $suggestions3.innerHTML = '';
  const suggestions = ingredients.filter(ingredient => ingredient.toLowerCase().includes(input));
  console.log(suggestions)

  suggestions.forEach(suggested =>{
    const div = document.createElement('div');
    div.innerHTML = suggested;
    div.setAttribute('class', 'suggestion3')
    $suggestions3.appendChild(div);
  })

  if(input === '') {
    $suggestions3.innerHTML = '';
  }
})

document.addEventListener('click', function(e) {
  if(e.target.className === "suggestion3") {
    console.log(e.target.innerHTML)
    $input3.value = e.target.innerHTML;
    $suggestions3.innerHTML = '';
  }
})
 