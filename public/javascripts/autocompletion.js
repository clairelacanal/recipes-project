  let ingredients = ['chicken','tomatoes','banana','zucchini','cheese'];
    
  var $input1 = document.getElementById('ingredients-search-1');
  var $input2 = document.getElementById('ingredients-search-2');
  var $input3 = document.getElementById('ingredients-search-3');

  var $suggestions1 = document.getElementById('suggestions-input-1')

  var $li1 = document.getElementsByClassName('ingredient-list')

  $input1.addEventListener('input', function(){
    const input = $input1.value;
    
    $suggestions1.innerHTML = '';
    const suggestions = ingredients.filter(ingredient => ingredient.toLowerCase().includes(input));
    console.log(suggestions)

    suggestions.forEach(suggested =>{
      const div = document.createElement('div');
      div.innerHTML = suggested;
      $suggestions1.appendChild(div);
    })

    if(input === '') {
      $suggestions1.innerHTML = '';
    }



  })




  
 