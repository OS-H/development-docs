# 文档修订记录

| 版本   | 发布日期    | 修改内容                            |
| ------ | ----------- | ----------------------------------- |
| 1.0    | 2023-05-17  | 创建了插件列表文档   |

# 插件列表

本文档主要维护目前osh系统已有的插件。

| 插件类型   | 插件名称            | 插件部署                                                                                                                                                                                   | 插件使用                                                                                                                                                                                     |
|--------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 数据库组件  | mysql插件         | [mysql插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%8F%92%E4%BB%B6.md)                           | [mysql插件使用案例](https://github.com/OS-H/purpose_module/blob/main/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%8F%92%E4%BB%B6.md)                           |
| 搜索引擎组件 | elasticsearch插件 | [elasticsearch插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md) | [elasticsearch插件使用文档](https://github.com/OS-H/purpose_module/blob/main/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md) |
| 文件存储组件 | minio插件         | [minio插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E7%BB%84%E4%BB%B6/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E6%8F%92%E4%BB%B6.md)         | [minio插件使用文档](https://github.com/OS-H/purpose_module/blob/main/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E7%BB%84%E4%BB%B6/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E6%8F%92%E4%BB%B6.md)         |
| 时空引擎组件 | geoserver插件     | [geoserver插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)     | [geoserver插件使用](https://github.com/OS-H/purpose_module/blob/main/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)       |
| 消息引擎组件 | rocketmq插件      | [rocketmq插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)      | [rocketmq插件使用](https://github.com/OS-H/purpose_module/blob/main/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)        |
| 缓存组件   | redis插件         | [redis插件部署](https://github.com/OS-H/purpose_module/blob/main/%E7%BC%93%E5%AD%98%E7%BB%84%E4%BB%B6/%E7%BC%93%E5%AD%98%E6%8F%92%E4%BB%B6.md)                                                                                                                                                                          | [redis缓存插件使用](https://github.com/OS-H/purpose_module/blob/main/%E7%BC%93%E5%AD%98%E7%BB%84%E4%BB%B6/%E7%BC%93%E5%AD%98%E6%8F%92%E4%BB%B6.md)                                                                                                                                                                          |
| ...    |                 |                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                       |

# 通用插件

主要维护如数据库、中间件等通用插件，这类插件不需要进行插件授权认证。

| 插件id | 插件类型   | 插件名称            | 插件部署                                                                                                                                                                                   | 插件使用                                                                                                                                                                                     |
|------|--------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | 数据库组件  | mysql插件         | [mysql插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%8F%92%E4%BB%B6.md)                           | [mysql插件使用案例](https://github.com/OS-H/purpose_module/blob/main/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%8F%92%E4%BB%B6.md)                           |
| 2    | 搜索引擎组件 | elasticsearch插件 | [elasticsearch插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md) | [elasticsearch插件使用文档](https://github.com/OS-H/purpose_module/blob/main/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md) |
| 3    | 文件存储组件 | minio插件         | [minio插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E7%BB%84%E4%BB%B6/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E6%8F%92%E4%BB%B6.md)         | [minio插件使用文档](https://github.com/OS-H/purpose_module/blob/main/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E7%BB%84%E4%BB%B6/%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E6%8F%92%E4%BB%B6.md)         |
| 4    | 时空引擎组件 | geoserver插件     | [geoserver插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)     | [geoserver插件使用](https://github.com/OS-H/purpose_module/blob/main/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%97%B6%E7%A9%BA%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)       |
| 5    | 消息引擎组件 | rocketmq插件      | [rocketmq插件部署](https://github.com/OS-H/purpose_module/blob/main/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)      | [rocketmq插件使用](https://github.com/OS-H/purpose_module/blob/main/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E7%BB%84%E4%BB%B6/%E6%B6%88%E6%81%AF%E5%BC%95%E6%93%8E%E6%8F%92%E4%BB%B6.md)        |
| 6    | 缓存组件   | redis插件         | [redis插件部署](https://github.com/OS-H/purpose_module/blob/main/%E7%BC%93%E5%AD%98%E7%BB%84%E4%BB%B6/%E7%BC%93%E5%AD%98%E6%8F%92%E4%BB%B6.md)                                                                                                                                                                          | [redis缓存插件使用](https://github.com/OS-H/purpose_module/blob/main/%E7%BC%93%E5%AD%98%E7%BB%84%E4%BB%B6/%E7%BC%93%E5%AD%98%E6%8F%92%E4%BB%B6.md)                                                                                                                                                                          |
| 7    | ...    |                 |                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                       |

# 物联插件

主要维护和设备对接相关的插件

| 插件id | 插件名称 | 插件详情| 
| ------- | ------- | ------- |
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

# 能力插件

主要维护AI能力、三维能力、大数据、空间计算能能力插件。

# 业务插件

主要维护业务相关插件
