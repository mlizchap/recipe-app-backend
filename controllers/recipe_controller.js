const Recipe = require('../models/Recipe');

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there'})
    },
    create(req, res) {
        const recipeProps = req.body;

        Recipe.create(recipeProps) 
            .then(recipe => res.send(recipe))
        
    },
    
}