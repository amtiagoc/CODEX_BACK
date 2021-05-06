const pg = require("pg");

class PostgresService {
  constructor() {
<<<<<<< HEAD
    this.connectionString = "postgresql://postgres:postgres@localhost:5432/apolosalud";
=======
    this.connectionString = "postgresql://postgres:postgres@localhost:5432/ApoloSalud";
>>>>>>> eb6bc139055fce7bf9a665174d90b66b8ecb8d2b
    this.pool = new pg.Pool({ connectionString: this.connectionString });
  }

  async executeSql(sql) {
    let result = await this.pool.query(sql);
    return result;
  }

  async executeSqlData(sql, data) {
    let result = await this.pool.query(sql, data);
    return result;
  }
}

module.exports = PostgresService;