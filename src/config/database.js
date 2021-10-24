module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    underscored: true,
    timestamp: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
};