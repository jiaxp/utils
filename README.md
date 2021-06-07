# utils

> 通用方法库

### Install

``` bash
npm install utils-cs --save
```

### Use
``` bash
import { print } from 'utils-cs'
```

### Props
``` bash
1.defaultValue (val, defaultVal)  缺省补全
Params
  val【String】值
  defaultVal【String】【默认值：无】默认缺省值

2.getUUID  获取uuid
Params
  len【Number】【默认值：32】

3.toPrice  转换成金额格式
Params
  money【String】金额
  floatNumber【Number】【默认值：2】小数点位数

4.resetObject 对象赋值
Params
  targetObj【Object】目标对象
  sourceObj【Object】源对象
  isdefault【Boolean】是否追加默认值
  defaultVal【默认值：‘’】

5.dateFormatter 日期格式化
Params
  date【Date】日期
  fmt【String】格式化串

6.getObjectType 获取数据类型

7.timeDiff 时间差
Params
  startTime【Date】开始时间
  endTime【Date】结束时间

8.getFileType 文件类型
Params
  path【String】文件path或者文件名称

Return
excel/word/pdf/ppt/image/video/audio

9.print 打印
Params
  ele【Dom】打印区域dom对象
  opts【Object】打印参数
    direction【String】：方向 portrait-纵向 landscape-横向  默认：portrait
    margin【Array】：打印四周边距 默认：[40]
    scale【Number】：清晰度，越大越清晰 默认：2
    backgroundColor【String】：背景色 默认：#ffffff
    startCallback【Function】：处理打印-start
    endCallback【Function】：处理打印-end
    beforePrint【Function】：打印-before
    afterPrint【Function】：打印-after
    
10.getRouteNameByMenuAuth 把菜单的权限标识转换成路由name
Params
  auth【String】
```
