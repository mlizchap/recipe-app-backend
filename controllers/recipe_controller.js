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
    index(req, res) {
        Recipe.find({})
            .then(users => res.send(users))
    },
    getOne(req, res) {
        Recipe.findById(req.params.id)
            .then(recipe => res.send(recipe))
    },
    delete(req, res, next) {
        const id = req.params.id;

        Recipe.findByIdAndRemove({ _id: id})
            .then(recipe => res.send(recipe))
            .catch(next)
    },
    edit(req, res, next) {
        const id = req.params.id;
        const recipeProps = req.body;

        Recipe.findOneAndUpdate({ _id: id}, recipeProps)
            .then(() => Recipe.findById({ _id: id}))
            .then(recipe => res.send(recipe))
            .catch(next)
    }
    
}