/*

const autocomplete = require('autocompleter');
const Ingredient = require('../models/Ingredients.model');


let ingredients = [
  { label: 'chicken', value: 'chicken'},
  { label: 'tomatoes', value:'tomatoes'},
  { label: 'banana', value: 'banana'}
];
  
var $input1 = document.querySelector('ingredients-search-1')
var $input2 = document.querySelector('ingredients-search-2')
var $input3 = document.querySelector('ingredients-search-3')

autocomplete({
  onSelect: function(item) {
      alert(item.value);
  },
  input: $input1,
  minLength: 2,
  emptyMsg: 'No elements found',
  render: function(item, currentValue) {
      var div = doc.createElement("div");
      div.textContent = item.label;
      return div;
  },
  className: 'autocomplete-customizations',
  fetch: function(text, callback) {
      text = text.toLowerCase();
      var suggestions = ingredients.filter(n => n.label.toLowerCase().startsWith(text))
      update(suggestions);
  },
});


let ingredients = [];
Ingredient.find({}, { name: 1, _id: 0})
  .then(ingredientsnames => {
    console.log(ingredientsnames)
    //ingredients.push(ingredientsnames)
  })
  .catch(err => console.log(err))

//console.log(ingredients)



var $input1 = document.querySelector('ingredients-search-1')

		var ingredients = ['chicken', 'tomatoes', 'banana'];

		var items = ingredients.map(function (n) { return { label: n}}).concat(conts);
		var allowedChars = new RegExp(/^[a-zA-Z\s]+$/)

		function charsAllowed(value) {
			return allowedChars.test(value);
		}

		autocomplete({
			input: $input1,
			minLength: 1,
			onSelect: function (item, inputfield) {
				inputfield.value = item.label
			},
			fetch: function (text, callback) {
				var match = text.toLowerCase();
				callback(items.filter(function(n) { return n.label.toLowerCase().indexOf(match) !== -1; }));
			},
			render: function(item, value) {
				var itemElement = document.createElement("div");
				if (charsAllowed(value)) {
					var regex = new RegExp(value, 'gi');
					var inner = item.label.replace(regex, function(match) { return "<strong>" + match + "</strong>" });
					itemElement.innerHTML = inner;
				} else {
					itemElement.textContent = item.label;
				}
				return itemElement;
			},
			emptyMsg: "No countries found",
			customize: function(input, inputRect, container, maxHeight) {
				if (maxHeight < 100) {
					container.style.top = "";
					container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + "px";
					container.style.maxHeight = "140px";
				}
			}
		})

		document.querySelector("input").focus();
*/