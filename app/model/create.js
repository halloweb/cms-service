const mysqlHelper = require('../db/mysql-helper')
/**
 * 数据库建表
 * fields:{
 *  field: Id,
 *  type: int(11)
 * }
 */
module.exports = async (table,fields) => {
    let sql = `CREATE TABLE userInfo (
        \`Id\` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
        \`UserName\` varchar(64) NOT NULL COMMENT '用户名',
        \`UserPass\` varchar(64) NOT NULL COMMENT '用户密码',
        PRIMARY KEY (\`Id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表'`
      try{
        let result = await mysqlHelper.query(sql);
        console.log('创建表成功')
      } catch(err) {
          console.log(err);
          console.log('创建表失败')
      }
} 