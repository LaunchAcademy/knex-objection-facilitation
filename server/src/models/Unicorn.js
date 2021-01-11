const Model = require("./Model.js")

class Unicorn extends Model {
  static get tableName(){
    return "unicorns"
  }
}

module.exports = Unicorn