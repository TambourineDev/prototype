module.exports = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'proposal'
  },
  pool: {
    afterCreate: (conn, done) => {
      console.log('db connected')
      done()
    }
  }
}
