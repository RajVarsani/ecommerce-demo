import customersRouter from "./api/controllers/customers/router";
import fieldRouter from "./api/controllers/fields/router";

export default function routes(app) {
  app.use("/api/v1/customer", customersRouter);
  app.use("/api/v1/field", fieldRouter);
}
