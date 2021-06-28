# Utils

> 服务云-通用方法库

### Install

``` bash
npm install utils-cs --save
```

### Usage

* 全部引入

  ``` 
  import Utils from 'utils-cs'
  Vue.use(Utils,{
    rootMethods:['print'], // 需要挂载到到Vue根下的方法
    namespace: process.env.VUE_APP_NAME, // 命名空间名称
    tokenKey: 'tokenKey', // token的key值，非必填【默认值：AuthAPIToken】
    router: router // 路由对象
  })
  ```

  使用：this.$utils


* 按需引入

  ```
  import { print } from 'utils-cs'
  ```

### Functions

* ### defaultValue(val, defaultVal)  缺省补全

    * Params

        * val：【String】值

        * defaultVal：【String】默认缺省值【默认值：无】

    * Return：【String】返回值

* ### getUUID(len)  获取uuid

    * Params

        * len：【Number】生成uuid的长度【默认值：32】

    * Return：【String】返回值

* ### toPrice(money, floatNumber)  转换成金额格式

    * Params

        * money：【String/Number】金额

        * floatNumber：【Number】小数点位数【默认值：2】

    * Return：【String】返回值

* ### resetObject(targetObj, sourceObj, isdefault, defaultVal) 对象赋值
    * Params

        * targetObj：【Object】目标对象

        * sourceObj：【Object】源对象

        * isdefault：【Boolean】是否追加默认值【默认值：false】

        * defaultVal：【String】追加的默认值【默认值：‘’】

    * Return：【String】返回值

* ### dateFormatter(date, fmt) 日期格式化

    * Params

        * date：【Date】日期

        * fmt：【String】格式化串

    * Return：【String】返回值

* ### getObjectType(obj) 获取数据类型

    * Params

        * obj：【Object】任意对象

    * Return：【String】返回值


* ### timeDiff(startTime, endTime) 时间差

    * Params

        * startTime：【Date】开始时间

        * endTime：【Date】结束时间

    * Return：【String】返回值

* ### getFileType(path) 文件类型

    * Params

        * path：【String】文件path或者文件名称

    * Return：【String】返回值 excel/word/pdf/ppt/image/video/audio

* ### print(ele, opts) 打印

    * Params

        * ele：【Dom】打印区域dom对象

        * opts：Object】打印参数

            * direction：【String】：方向 portrait-纵向 landscape-横向 默认：portrait

            * margin：【Array】打印四周边距 默认：[40]

            * scale：【Number】清晰度，越大越清晰 默认：2

            * backgroundColor：【String】背景色 默认：#ffffff

            * startCallback：【Function】处理打印-start

            * endCallback：【Function】处理打印-end

            * beforePrint：【Function】打印-before

            * afterPrint：【Function】打印-after

* ### getRouteNameByMenuAuth(auth) 把菜单的权限标识转换成路由name

    * Params

        * auth：【String】菜单的权限标识

    * Return：【String】

* ### isSameStr(val1, val2) 判断两个字符串/数字是相同的字符串

    * Params

        * val1：【String/Number】

        * val2：【String/Number】

    * Return：【Boolean】

* ### getToken(tokenKey, namespace)

    * Params

        * tokenKey：【String】token的key【默认值：‘AuthAPIToken’】

        * namespace：【String】空间名称 【默认值：‘’】

    * Return：【String】

* ### setToken(token, tokenKey, namespace)

    * Params

        * token：【String】token

        * tokenKey：【String】token的key【默认值：‘AuthAPIToken’】

        * namespace：【String】空间名称【默认值：‘’】

* ### removeToken(tokenKey, namespace)

    * Params

        * tokenKey：【String】token的key【默认值：‘AuthAPIToken’】

        * namespace：【String】空间名称 【默认值：‘’】

* ### getLocalStorage(name, namespace)

    * Params

        * name：【String】数据名称

        * namespace：【String】空间名称 【默认值：‘’】

    * Return：【Object】

* ### setLocalStorage(name, data, namespace)

    * Params

        * name：【String】数据名称

        * data：【Object】数据的值

        * namespace：【String】空间名称【默认值：‘’】

* ### removeLocalStorage(name, namespace)

    * Params

        * name：【String】数据名称

        * namespace：【String】空间名称 【默认值：‘’】

* ### getSessionStorage(name, namespace)

    * Params

        * name：【String】数据名称

        * namespace：【String】空间名称 【默认值：‘’】

    * Return：【Object】

* ### setSessionStorage(name, data, namespace)

    * Params

        * name：【String】数据名称

        * data：【Object】数据的值

        * namespace：【String】空间名称【默认值：‘’】

* ### removeSessionStorage(name, namespace)

    * Params

        * name：【String】数据名称

        * namespace：【String】空间名称 【默认值：‘’】

* ### getUrlQuery(path, key) 获取url中的参数

    * Params

        * path：【String】外部输入的url，不传则默认获取window.location.href

        * key：【String】参数key

    * Return：【Object/String】

* ### getVersionInfo() 获取版本信息

    * Return：【Object】

* ### Validator 校验器

    * #### Usage

      ```
      Validator.isEmail(‘123456@qq.com’)
      ```

    * ### Return：【Boolean】

    * ### Functions：校验器内置的防范

        * isExternal：外链

        * isURL：URL

        * isLowerCase：小写

        * isUpperCase：大写

        * isAlphabets：字母

        * isEmail：邮件

        * isMobile：座机号码

        * isPhone：手机号码

        * isTaxNumber：税号

        * isCode：编码：字母、数字、短横杠、下划线（1~50位）

        * isIDNumber：身份证号

        * isNotEmptyStr：非空

* ### encrypt(data, publicKey) 加密

    * Params

        * data:【String/Object】需要加密的数据

        * publicKey：【String】公钥 选填

    * Return：【String】

* ### decrypt(data, privateKey) 解密

    * Params

        * data:【String】加密后的数据

        * privateKey：【String】私钥 选填

    * Return：【String】
