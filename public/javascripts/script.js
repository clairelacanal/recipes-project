document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


function validate(frm)
{
	var ele = frm.elements['input-add'];
	if (! ele.length)
	{
		alert(ele.value);
	}
	for(var i=0; i<ele.length; i++)
	{
		alert(ele[i].value);
	}
	return true;
}


function addIngredient() {
  let nbIngredients = document.getElementsByClassName("add-things-ing").length;
  let nextIngredient = nbIngredients + 1;

  let divIngredient = document.createElement('div');
  divIngredient.setAttribute("class", "add-things-ing");
  let labelIngredient = document.createElement('label');
  labelIngredient.setAttribute("class", "form-labels");
  labelIngredient.setAttribute("id", "input-parent" + nextIngredient);
  let inputIngredient = document.createElement('input');
  inputIngredient.setAttribute("class", "form-input");
  inputIngredient.setAttribute("type", "text");
  inputIngredient.setAttribute("name", "ingredient" + nextIngredient);
  inputIngredient.setAttribute("placeHolder", "Ingredient " + nextIngredient);

  labelIngredient.appendChild(inputIngredient);
  divIngredient.appendChild(labelIngredient);
	document.getElementById('all-ingredients').appendChild(divIngredient);
}

function addStep() {
  let nbSteps = document.getElementsByClassName("add-things").length;
  let nextStep = nbSteps + 1;

  let divStep = document.createElement('div');
  divStep.setAttribute("class", "add-things");
  let labelStep = document.createElement('label');
  labelStep.setAttribute("class", "form-labels");
  let inputStep = document.createElement('input');
  inputStep.setAttribute("class", "form-input");
  inputStep.setAttribute("type", "text");
  inputStep.setAttribute("name", "step" + nextStep);
  inputStep.setAttribute("placeHolder", "Step " + nextStep);

  labelStep.appendChild(inputStep);
  divStep.appendChild(labelStep);
	document.getElementById('all-steps').appendChild(divStep);
}

function addLike(){
  let heartImage = document.getElementById("heart");
  let currentImage = heartImage.getAttribute("src");
  let divId = document.getElementById("idRecipe");
  let recipeId = divId.getAttribute("value");
  let userid = divId.getAttribute("user");
  if (currentImage === "/images/heart.png") {
    heartImage.setAttribute("src", "/images/heart-full.png");
    addToMyFavorite(recipeId,userid);
  } else {
    heartImage.setAttribute("src", "/images/heart.png");
  }
}


function addToMyFavorite(recipeId,userid) {
  axios.post("http://localhost:3000/userProfile/"+userid+"/"+recipeId+"/add-favorite-recipes")   
}