const db = require('../db')

module.exports.getSubcription = function getSubcription (id) {
  const subscription = db('Subscriptions').where({ subscription_id: id }).first()

  return subscription
}
