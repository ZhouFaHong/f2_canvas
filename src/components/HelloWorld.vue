<template>
  <div class="hello">
    <input type="button" value="loadChart" @click="loadChart">
    <p>{{msg}}</p>
    <canvas id="myChart" width="400" height="260">fefe</canvas>
    <canvas id="boxCanvas" style="width: 100%;height: 300px;"></canvas>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    var data = [{
        year: '2015 年',
        sales: 145
      }, {
        year: '2016 年',
        sales: 121
      }, {
        year: '2017 年',
        sales: 100
      }, {
        year: '2018 年',
        sales: 97
      }, {
        year: '2019 年',
        sales: 85
      }];
      var chart = new this.F2.Chart({
        id: 'boxCanvas',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          var items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      // 让柱状图的宽度适配不同的屏幕尺寸
      var barWidth = 36 * (window.innerWidth / 375);
      chart.interval().position('year*sales').color('l(90) 0:#1890ff 1:#70cdd0').size(barWidth); // 定义柱状图渐变色
      chart.render();
  },
  methods:{
    loadChart () {
      // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 220 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 650 },
      ];

      // Step 1: 创建 Chart 对象
      const chart = new this.F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      });

      // Step 2: 载入数据源
      chart.source(data);

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position('genre*sold').color('genre');

      // Step 4: 渲染图表
      chart.render();
    },
  }
}



</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
