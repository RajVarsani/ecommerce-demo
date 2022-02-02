import l from "../../common/logger";
import Field from "../../models/FieldModel";

class FieldService {
  create(field) {
    l.info(`${this.constructor.name}.create(${field.name})`);
    return Field.create({ ...field });
  }

  async all() {
    l.info(`${this.constructor.name}.all()`);
    return Field.find();
  }
}

export default new FieldService();
