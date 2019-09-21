/**
 * const validateStrategy = {
 *   策略名: {
 *      regexp(必要字段): 校验规则,
 *      message(必要字段): 校验不通过的提示
 *   }
 * }
 */
export default {
  nameSpell: {
    regexp: /^[a-zA-Z]{1,50}$/,
    message: '姓名全拼为小写字母'
  },
  maxLength40Address: {
    regexp: /^[\u4E00-\u9FA5A-Za-z0-9]{0,40}$/,
    message: '户籍所在地市，户籍所在地详细地址，现居住地详细地址不能超过40个字'
  }
}
