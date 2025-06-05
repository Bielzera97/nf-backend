import { FastifyInstance } from "fastify";

export const invoicesRoute = (app: FastifyInstance) => {
  app.get("/", async () => {
    const invoices = [
      { id: 1, number: "NF12345", value: 1500.5, date: "2025-06-01" },
      { id: 2, number: "NF12346", value: 3200.0, date: "2025-06-02" },
      { id: 3, number: "NF12347", value: 980.0, date: "2025-06-03" },
    ];
    return invoices;
  });
};
