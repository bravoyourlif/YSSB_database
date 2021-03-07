module.exports={
  port: 3000,
  appRoot: __dirname,
  db: {
    connectionLimit: 20,  // 크게 고려 안해도 됨
    host: 'localhost',
    user: 'root',
  port: 3306,
    password: 'crush9244',
    database: 'no_team',
  },
  session_config: {
    secret: 'FEjfsdklewN@$(&*(F))&',
    resave: false,
    saveUninitialized: true
  },
  admin_config: {
    id: 'admin',
    pwd: 'admin'
  },
  db_config: {
    length: 256
  }
};
