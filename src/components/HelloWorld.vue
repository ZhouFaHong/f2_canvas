<template>
  <div class="hello">
    <input type="button" value="loadChart" @click="loadChart">
    <h1>{{msg}}</h1>
    <canvas id="tool"  style="width: 100%;height: 400px;"></canvas>
    <canvas id="myChart" width="400" height="260">fefe</canvas>
    <canvas id="boxCanvas" style="width: 100%;height: 400px;"></canvas>
    
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
      this.loadChart ();
      this.tool();
  },
  methods:{
    loadChart () {
      /**
       * F2 图形语法的核心就是建立数据中的一系列变量到图形属性的映射；
       */
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
    tool(){
      const data =[
        { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
        { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
        { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
        { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
        { name: 'London', 月份: 'May.', 月均降雨量: 47 },
        { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
        { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
        { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
        { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
        { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
        { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
        { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
        { name: 'Berlin', 月份: 'May.', 月均降雨量: 52.6 },
        { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
        { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
        { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
      ];
      const chart = new this.F2.Chart({
        id: 'tool',
        pixelRatio: window.devicePixelRatio,
        width: 400,
        height: 260
      });
      chart.source(data);
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function(obj) {
          const legend = chart.get('legendController').legends.top[0]; // 获取 legend
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const map = {};
          legendItems.map(item => {
            map[item.name] = this.F2.Util.mix({}, item);
          });
          tooltipItems.map(item => {
            const { name, value } = item;
            if (map[name]) {
              map[name].value = value;
            }
          });
          legend.setItems(Object.values(map));
        },
        // eslint-disable-next-line no-unused-vars
        onHide(tooltip) {
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });

      chart.interval().position('月份*月均降雨量')
        .color('name')
        .adjust({
          type: 'dodge',
          marginRatio: 0.05
        });
      chart.render();
    }
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

#myChart{
  width: 100%;
  height: 400;
}
</style>
