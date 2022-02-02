import l from "../../../common/logger";
import FieldService from "../../services/field.service";
import { defaultFeildNames } from "./../staticData";

class Controller {
  async create(req, res, next) {
    try {
      if (!defaultFeildNames.includes(req.body.name)) {
        const field = await FieldService.create(req.body);
        return res.json(field);
      }

      l.error(
        `Triggering 422 error for field name ${req.body.name} because it is a default field name`
      );
      return res.status(422).send({ message: "Field name already exists!" });
    } catch (err) {
      l.error(err.toString());

      if (err.name === "ValidationError") {
        return res.status(422).send(err);
      }
      if (err.name === "MongoError" && err.code === 11000) {
        return res.status(422).send({ message: err.message });
      }
      return next(err);
    }
  }

  async all(req, res) {
    try {
      const fields = await FieldService.all(req.query.type);
      res.json(fields);
    } catch (err) {
      return next(err);
    }
  }
}
export default new Controller();
