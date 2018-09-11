const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    ingredients: [{
        name: String,
        amount: String 
    }],
    picture: String,
    description: String
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;