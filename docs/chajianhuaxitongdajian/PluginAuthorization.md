# 文档修订记录

| 版本   | 发布日期    | 修改内容                            |
| ------ | ----------- | ----------------------------------- |
| 1.0    | 2023-05-17  | 创建了插件授权文档   |

# 插件授权
所有插件都需要经过认证授权服务的授权成功，才可以正常使用。插件开发者需要和认证服务进行对接开发，使得插件具备授权功能。

|   插件服务    | -----认证----> |  授权服务   |


# 授权协议
插件服务和授权服务之间通信通过http协议来实现。每个插件在系统中都会有一个唯一插件id，插件开发者在开发的时候需要向平台申请。
插件服务在系统初始化之后，通过http协议向认证服务发起认证请求，请求内容为json字符串格式，内容如下：
```
{
  "pluginid": "id"
}
```
授权服务会应答一串加密的报文，整个报文采用RSA加密，解密之后格式为
```
{
"code": 200,
"expire":"2023-05-11 00:00:00"
"time": "2023-05-10 00:00:00"
}
```
字段说明如下：
code字段：如果应答为200 说明授权成功，如果为其他值，说明授权失败，此时插件服务需要停止工作。  
expire字段：该字段为插件授权的有效期，如果为"-1"表示永久授权，"2023-05-11 00:00:00"表示插件有效期为2023年5月11号，当超出这个时间，插件服务需要停止工作。  
time字段：该字段主要检验应答消息的有效性，需要比较当前时间和time字段时间的差异，如果当前时间大于time字段120秒，说明该消息是非法消息，此时插件服务需要停止工作。  

# 应答数据解密
rsa解密的私钥如下
```
"-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAztIM292Rj2YiRSjCSbrOAyO0fW9w6gfw8eUyfA+nRYahKmhV\nBMhj5qw1n6GXIc3J6zkjk6FpKsYgMnFN824FexxSwpISXpNIfD7SESTP5Jq/isYP\noKGm/Q42rhQ9z+JKWsPQY5SjU3blaL74zIpuSDCeU2G9eZWz4AZHMwGnVOdbFGGm\nzJhWCGu1I2diiZUu9NV+ZEHE3nTNGyAgdVz5kxQVmRgxNF+GWueOFcW23kIGKRYv\nFJpSB5hpUV64slUJPzVv4O4J+TQoLCNq3nEX9PSNRRFAQxQRYe2DR9v2RJ03bQE9\nc6zPDrpGmqtLFXawzeVkYqecvYcxe32VKZ1bLwIDAQABAoIBACPf+6sHvAALz1X/\nw/PWG3Yf82butb9isUDEaQVsEa/Vso8Qme7Cc9HHfWW7OeP7NlM/DhTFouBwjZUy\nYjsfkoPQXeqyO8177s7edsHSiN02mpMP2BYc9EJg/MslZ7NvpUYpQTSEy+/mZ9TL\ni4yvVoHfLRd5lMxKU3FApYkLeGMZjrF6dlZ1NgqgPOuoxaXjGEhExHYR/5tSQQa8\nyx7rDvIFlOTvkixDMHld9LgW4WMVIKQP879BTsGca5Y8/G7ABaykr8G3u2tPXDIT\n3J/aks4COX8Yw+8mLYJrMIIfUCQ3LXTBswJxbCQufNDyVXs7xXF4lUwusgxBIeEz\nz6UiqcECgYEA4LooCSqa2b2EXT2ihJKb6H8ZRHqF7U2wvgYszYIvVOJn3kDkhXZ4\nzsWUB9tjrLBUS0ko87RpEnKrEApIRRqKXcOpcvf8JaTdWp4kLb4Fjnytp5jLet3b\nXlzoWRRx6YTNYNChs38OxVPIR2PCnbHz48QMNxqeLy3k0Y+tBbw9ZVsCgYEA65n5\nTfvOuV5mLrwGafmoyYlwRkehDSG/oyWS5jukO7nCODBJfVsOPpjI2SSu7sBtjlmE\nkPeWuGZgK6N+hVgYweWa13lCqm5mIJLcI0fkXGsDK4sSuBDciQe07hb0LXU+PE9J\nNHgH0h3KhUMttkVlmcGmlMNaW3qqKdJ3ARVoRb0CgYEAw36uHWtG0myfnU1k99di\ncds/a+b6YvnW6zgL+atq6XkbyqjBI6lwZtBSepNMHoo2ilfWnEsxrK68SXPoctUn\n0XHJEw7P9x94wMAZ0QEhbFbh6o5tVTFzCJ/iMLwsbGzvDW3xfWjmvJqp/BC42N5Z\nwKZnyfgJ7BkMmZFXf0nGT0kCgYAk7V1F+9HK/CDH8nCO67Ko5AHVAiUcCc4fpCQC\nMhbrxZHLfMYH/92bshbI8hb5FPAW/7Dnh+b3wBQSwu1xuP0oZvR+EWOBkwwuztXy\nMbJ5ScyVZpbogrwOPkb9ilt7RIUcrtCqiKWxKTo06PKhPv9NuiyB5Jyk+fTx2SsN\n4G0XgQKBgDabX6LFr7wBkkRsFClxYH+Bl3e5/lcxAMwkXTavFPfEjBDMQbjPkEDR\nDa5QWK55g3DtM6ACjeNDJvQrQODOIBUztx3735UqoesCCGennB9/HvyEW6GGOjmM\nJWqj+nT1SfUGxh7xXwYUu+DJw9Xr9ENn3iG/VC8imL3iKkypA4I+\n-----END RSA PRIVATE KEY-----\n"
```
示例解密工程见仓库地址
https://github.com/OS-H/PluginAuthorizationDemo

