const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
});


//to export the variables from this file
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}