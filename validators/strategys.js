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
    regexp: /^[a-z]{1,50}$/,
    message: '姓名全拼应为小写字母'
  },
  maxLength10: {
    regexp: /^[A-Za-z0-9]{1,10}$/,
    message: '字符长度不能超过10'
  },
  email: {
    regexp: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    message: '邮箱格式不正确'
  }
}
