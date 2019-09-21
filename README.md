# validator-form
✨**一个使用简单，功能齐全的迷你表单验证工具函数库。**

### Feature 🚀
- [x] 使用简单，学习成本几乎为零
- [x] 没有依赖其他第三方库，引入成本几乎为零
- [x] 测试用例覆盖率达 100%
- [x] 检验粒度更小，自由度更高
- [x] 全局统一管理、配置所有的正则策略
- [x] 良好的使用错误提示

### TODO
- [ ] 支持 npm 安装
- [ ] 支持 TypeScript
- [ ] 支持异步操作
- [ ] 支持海量数据验证
- [ ] 更丰富的 API
- [ ] More...

### Usage
1. 直接将```validators```目录作为工具函数拷贝使用
2. 在```validators/strategys.js```文件进行配置
3. 引入```validators/index.js```中的函数```validateValue```进行使用

### APIs
``` js
validateValue(values, strategys, isMessageString?)

// return
{
  isValid,
  message
}
```
- values: <String | String[]> 需要校验的值，支持字符串、数组，必填参数
- strategys: <String | String[]> 需要校验的值匹配的正则策略，支持字符串、数组，必填参数
- isMessageString?: <Boolean> 是否以字符串的形式返回收集的 message，默认值：true，可选参数 
- isValid: <true | false> 是否校验成功
- message: <String | Array> 收集校验不成功时对应的 message，返回类型取决于参数```isMessageString```的值

### Example
- 在```strategy.js```文件中配置正则策略：
``` js
export default {
  maxLength10: {
    regexp: /^[A-Za-z0-9]{1,10}$/,
    message: '字符长度不能超过10'
  },
  email: {
    regexp: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    message: '邮箱格式不正确'
  }
}
```

- 使用```validateValue```进行校验
``` js
// 单条正则策略匹配单个值
validateValue('leeperleeper@@outlook.com', 'email');
validateValue('leeperleeper@@outlook.com', ['email']);
validateValue(['leeperleeper@@outlook.com'], 'email');
validateValue(['leeperleeper@@outlook.com'], ['email']);
//return
{
  isValid: false
  message: '邮箱格式不正确'
}


// 多条正则策略匹配单个值
validateValue('leeperleeper@@outlook.com', ['email', 'maxLength10'], false);
validateValue(['leeperleeper@@outlook.com'], [['email', 'maxLength10']], false);
// return
{
  isValid: false
  message: ['邮箱格式不正确', '字符长度不能超过10']
}

// error: 不可以传入两个长度不一样的数组，下面一条使用为❌错误栗子
validateValue(['leeperleeper@@outlook.com'], ['email', 'maxLength10']);


// 多条正则策略匹配多个值
validateValue(['leeperleeper@@outlook.com', 'leeperleeper@@'], [['email', 'maxLength10', 'email'], ['maxLength10']], false);

// return
{
  isValid: false
  message: [['邮箱格式不正确', '字符长度不能超过10', '邮箱格式不正确'], ['字符长度不能超过10']]
}
```

### Test
```
git clone git@github.com:iyolee/validator-form.git
npm install
npm test
```
- 行覆盖率(line coverage): 100%
- 函数覆盖率(function coverage): 100%
- 分支覆盖率(branch coverage): 100%
- 语句覆盖率(statement coverage): 100%

### Licence
**MIT**