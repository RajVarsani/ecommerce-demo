import l from "../../../common/logger";
import CustomerService from "../../services/customer.service";

export class Controller {
  async create(req, res, next) {
    try {
      const customer = await CustomerService.create(req.body);
      res.json(customer);
    } catch (err) {
      if (err.name === "ValidationError") {
        res.status(422).send(err);
      } else if (err.name === "MongoError" && err.code === 11000) {
        res.status(422).send(err.message);
      } else {
        next(err);
      }
      l.error(err.toString());
    }
  }

  async all(req, res) {
    try {
      const customers = await CustomerService.all(req.query.type);
      res.json(customers);
    } catch (err) {
      next(err);
    }
  }

  async byId(req, res) {
    try {
      const customer = await CustomerService.byId(req.params.id);
      res.json(customer);
    } catch (err) {
      l.error(err.toString());
      res.status(404).send(err);
    }
  }
}
export default new Controller();
