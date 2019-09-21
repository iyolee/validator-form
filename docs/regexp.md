# 正则表达式
### 添加原则
```
标题：[序号][验证项]
表达式：准确无误的正则表达式
注解：结合实际或说明体现该正则表达式的合理性
```

### 1. 邮箱
```
^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$
```
- 邮箱@前缀的几种类型：
  1. 纯数字 66666@outlook.com
  2. 纯字母 leeper@outlook.com
  3. 字母数字混合 leeper1@outlook.com
  4. 带点的 leeper.china@outlook.com
  5. 带下划线 leeper_china@outlook.com
  6. 带连接线 leeper-china@outlook.com
- 一个@符号
- 邮箱域至少有一个“.”和两个单词
- 顶级域至少要2个字母

### 2. 待添加...