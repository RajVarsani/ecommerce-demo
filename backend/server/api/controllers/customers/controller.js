import l from "../../../common/logger";
import CustomerService from "../../services/customer.service";

export class Controller {
  async create(req, res, next) {
    try {
      const customer = await CustomerService.create(req.body);
      return res.json(customer);
    } catch (err) {
      l.error(err.toString());

      if (err.name === "ValidationError") {
        return res.status(422).send(err);
      }
      if (err.name === "MongoError" && err.code === 11000) {
        return res.status(422).send(err.message);
      }
      return next(err);
    }
  }

  async all(req, res, next) {
    try {
      const customers = await CustomerService.all(req.query.type);
      return res.json(customers);
    } catch (err) {
      l.error(err.toString());
      return next(err);
    }
  }

  async byId(req, res, next) {
    try {
      const customer = await CustomerService.byId(req.params.id);
      if (!customer) {
        l.info(`Customer with id ${req.params.id} not found`);
        return res.status(404).send({ message: "Customer not found" });
      }
      return res.json(customer);
    } catch (err) {
      l.error(err.toString());
      return next(err);
    }
  }
}
export default new Controller();
