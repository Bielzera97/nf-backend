import Fastify from "fastify";
import { appRoutes } from "./routes/index.js";
import { userRoutes } from "./routes/users.js";

const app = Fastify();

app.register(appRoutes);

app.listen({port: 3000}).then(() => {
    console.log("Servidor rodando na porta 3000")
})

app.get('/', async () => {
    return 'Api funcionando!'
})

app.register(userRoutes, {prefix: '/users'})