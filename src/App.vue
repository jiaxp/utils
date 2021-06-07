<template>
  <div id="app">
    <date-range-picker
      v-model="dateValue"
      @change="changeHandle"
    />
    <div>开始时间：{{ dateValue[0] }}</div>
    <div>结束时间：{{ dateValue[1] }}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dateValue: []
    }
  },
  methods:{
    changeHandle(value){
      console.log(value)
    }
  }
}
</script>

