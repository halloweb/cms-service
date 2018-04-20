const mysqlHelper = require('../db/mysql-helper')

const userinfo = {
    
      /**
       * 增加一条数据
       * @param  {object} args  参数
       * @return {object}       结果
       */
      async add ( args ) {
        let sql = 'INSERT INTO userinfo(UserName, UserPass) VALUES(?, ?)'
        let params = [args.username, args.userpass]
        let result = await mysqlHelper.query(sql, params)
        return result
      }
}
module.exports = userinfo