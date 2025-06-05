import { FastifyInstance } from "fastify";

export const userRoutes = (app: FastifyInstance) => {
    app.get('/', async () => {
        return [{
            id: 1,
            nome: "Gabriel",
        },
        {
            id: 2,
            nome: "Gabriela"
        }
        ]
    })
}