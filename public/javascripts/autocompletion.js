

  let ingredients = ['chicken', 'tomatoes', 'banana', 'zucchini', 'cheese'];
    
  var $input1 = document.getElementById('ingredients-search-1');
  var $input2 = document.getElementById('ingredients-search-2');
  var $input3 = document.getElementById('ingredients-search-3');

  var $ul1 = document.getElementById('autocomplete-ingredient-1');
  var $ul2 = document.getElementById('autocomplete-ingredient-2');
  var $ul3 = document.getElementById('autocomplete-ingredient-3');

  function showIngredientsArray(arr) {
    const html = !arr.length ? '' : arr.join('');
    $ul1.innerHTML = html;
  }

  $input1.addEventListener('input', (e) => {
    let ingredientsArray = [];
    if(e.target.value) {
      ingredientsArray = ingredients.filter(ingredient => ingredient.toLowerCase().includes(e.target.value));
      ingredientsArray = ingredientsArray.map(ingredient => `<li>${ingredient}</li>`)
    }
    showIngredientsArray(ingredientsArray)
  });

  $ul1.addEventListener('click', (e) => {
    $input1.innerHTML = $ul1.innerText;
  })
  
 