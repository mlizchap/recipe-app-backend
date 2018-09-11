const controller = require('./controllers/recipe_controller');

module.exports = (app) => {
    app.post('/api/new', controller.create)
    app.get('/api', controller.index)
    app.get('/api/:id', controller.getOne)
    app.delete('/api/:id', controller.delete)
    app.put('/api/:id', controller.edit)
}