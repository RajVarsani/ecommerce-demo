import customersRouter from './api/controllers/customers/router';

export default function routes(app) {
  app.use('/api/v1/customer', customersRouter);
}
