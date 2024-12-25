const z = require("zod");

const TodoValidate = z.object({
    title: z.string(),
    description: z.string(),
    completed: z.boolean()
});

module.exports = { TodoValidate };