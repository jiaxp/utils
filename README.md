# date-range-picker

> 基于element-ui的时间区间选择组件

### Install

``` bash
npm install date-range-picker-cs --save
```

### Use
``` bash
import DateRangePicker from 'date-range-picker-cs'

Vue.use(DateRangePicker);

<date-range-picker v-model="dateValue"></date-range-picker>
```

### Props
``` bash
字段名称                类型           说明                        默认值
rangeSeparator         String        分割线                       “-”
defaultTime            Array         默认时间                     ['00:00:00', '23:59:59']
minDate                String/Date   最小值                       -
maxDate                String/Date   最大值        -
startPlaceholder       String        开始时间提示语                开始日期
endPlaceholder         String        结束时间提示语                结束日期
```
