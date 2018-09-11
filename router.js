const controller = require('./controllers/recipe_controller');

module.exports = (app) => {
    // app.get('/api', controller.greeting)
    app.post('/api/new', controller.create)
    app.get('/api', controller.index)
    app.delete('/api/:id', controller.delete)
    app.put('/api/:id', controller.edit)
}