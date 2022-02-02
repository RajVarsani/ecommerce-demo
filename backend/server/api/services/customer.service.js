import l from "../../common/logger";
import Customer from "../../models/CustomerModel";

class CustomerService {
  create(body) {
    l.info(`${this.constructor.name}.create(${body.email})`);
    return Customer.create({ ...body });
  }

  async all(ac) {
    l.info(`${this.constructor.name}.all(${ac})`);
    return Customer.find({ acType: ac });
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return Customer.findById(id);
  }
}

export default new CustomerService();
