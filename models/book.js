const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  cuisine: Array,
  excludedCuisine: Array,
  diet: Array,
  intolerances: Array,
  includeIngredients: Array,
  excludeIngredients: Array,
  recipes: Array,
  savedRecipes: Array,
  activeRecipe: Number
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
