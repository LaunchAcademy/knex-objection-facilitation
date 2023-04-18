const Model = require("./Model.js")

class Unicorn extends Model {
  static tableName() {
    return "unicorns"
  }
}

module.exports = Unicorn
