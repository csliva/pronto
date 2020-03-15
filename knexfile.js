// Update with your config settings.
const user = process.env.USER;
const pw = process.env.PASSWORD;
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'pronto_dev',
      user:     user,
      password: pw
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'pronto_staging',
      user:     user,
      password: pw
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'pronto_prod',
      user:     user,
      password: pw
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }

};
