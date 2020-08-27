<template>
    <div class="geom">
        <h1>geometry-几何标记</h1>
        <h3>饼图</h3>
        <canvas id='bingtu' width="500" height="300"></canvas>
        <h3>Line</h3>
        <canvas id='line' width="500" height="200"></canvas>
        <h3>rose</h3>
        <canvas id='rose' width="200" height="200"></canvas>
        <h3>bubble</h3>
        <canvas id='bubble' width="1000" height="200"></canvas>
        <h3>ordered-bubble</h3>
        <canvas id='ordered-bubble' width="1000" height="200"></canvas>
    </div>
</template>

<script>
export default {
    mounted(){
        /**
         * 几何标记和图表类型:https://www.yuque.com/antv/f2/geometry
         */
        const data = [{
            x: 95,
            y: 95,
            z: 13.8,
            name: 'BE',
            country: 'Belgium'
            }, {
            x: 86.5,
            y: 102.9,
            z: 14.7,
            name: 'DE',
            country: 'Germany'
            }, {
            x: 80.8,
            y: 91.5,
            z: 15.8,
            name: 'FI',
            country: 'Finland'
            }, {
            x: 80.4,
            y: 102.5,
            z: 12,
            name: 'NL',
            country: 'Netherlands'
            }, {
            x: 80.3,
            y: 86.1,
            z: 11.8,
            name: 'SE',
            country: 'Sweden'
            }, {
            x: 78.4,
            y: 70.1,
            z: 16.6,
            name: 'ES',
            country: 'Spain'
            }, {
            x: 74.2,
            y: 68.5,
            z: 14.5,
            name: 'FR',
            country: 'France'
            }, {
            x: 73.5,
            y: 83.1,
            z: 10,
            name: 'NO',
            country: 'Norway'
            }, {
            x: 71,
            y: 93.2,
            z: 24.7,
            name: 'UK',
            country: 'United Kingdom'
            }, {
            x: 69.2,
            y: 57.6,
            z: 10.4,
            name: 'IT',
            country: 'Italy'
            }, {
            x: 68.6,
            y: 20,
            z: 16,
            name: 'RU',
            country: 'Russia'
            }, {
            x: 65.5,
            y: 126.4,
            z: 35.3,
            name: 'US',
            country: 'United States'
            }, {
            x: 65.4,
            y: 50.8,
            z: 28.5,
            name: 'HU',
            country: 'Hungary'
            }, {
            x: 63.4,
            y: 51.8,
            z: 15.4,
            name: 'PT',
            country: 'Portugal'
            }, {
            x: 64,
            y: 82.9,
            z: 31.3,
            name: 'NZ',
            country: 'New Zealand'
            }];
            const chart = new this.F2.Chart({
                id: 'bubble',
                width:window.innerWidth,
                pixelRatio: window.devicePixelRatio
            });
            chart.source(data, {
                x: {
                    alias: 'Daily fat intake', // 定义别名
                    tickInterval: 4, // 自定义刻度间距
                    nice: false, // 不对最大最小值优化
                    max: 96, // 自定义最大值
                    min: 62 // 自定义最小是
                },
                y: {
                    alias: 'Daily sugar intake',
                    tickInterval: 50,
                    nice: false,
                    max: 165,
                    min: 0
                },
                z: {
                    alias: 'Obesity(adults) %'
                }
            });
            // 开始配置坐标轴
            chart.axis('x', {
                label: function label(text) {
                    return {
                    text: text + ' gr' // 格式化坐标轴显示文本
                    };
                },
                grid: {
                    stroke: '#d9d9d9',
                    lineWidth: 1,
                    lineDash: [ 2, 2 ]
                }
            });
            chart.axis('y', {
                line: this.F2.Util.mix({}, this.F2.Global._defaultAxis.line, {
                    top: false
                }),
                label: function label(text) {
                    if (text > 0) {
                        return {
                            text: text + ' gr'
                        };
                    }
                }
            });
            chart.tooltip(false);
            chart.point().position('x*y').color('#1890ff')
            .size('z', [ 10, 40 ])
            .shape('circle')
            .style({
                lineWidth: 1,
                stroke: '#1890ff',
                opacity: 0.3
            });

            // 绘制辅助文本
            data.forEach(function(item) {
                chart.guide().text({
                    position: [ item.x, item.y ],
                    content: item.name,
                    style: {
                        textAlign: 'center',
                        textBaseline: 'middle',
                        fill: '#1890FF'
                    }
                });
            });
            chart.render();
            this.bubble ();
            this.rose();
            this.line();
            this.bingtu();
    },
    methods: {
        bubble () {
            const Shape = this.F2.Shape;
            Shape.registerShape('point', 'with-text', {
            draw: function draw(cfg, container) {
                const size = cfg.size;
                const x = cfg.x;
                const y = cfg.y;
                const circle = container.addShape('Circle', {
                className: 'point',
                attrs: {
                    x,
                    y,
                    r: size,
                    fill: cfg.color
                }
                });
                const origin = cfg.origin._origin;
                const text = container.addShape('Text', {
                className: 'text',
                attrs: {
                    x,
                    y: y - size - 4,
                    fill: '#000',
                    text: origin.name + '\n$' + origin.volumes + 'billion',
                    textBaseline: 'bottom',
                    textAlign: 'center',
                    fontSize: 10
                }
                });
                return [ circle, text ];
            }
            });
            const data = [{
            name: 'Stripe',
            volumes: 1.5,
            x: 0.8,
            y: 50
            }, {
            name: 'Swipely',
            volumes: 2,
            x: 2.5,
            y: 50
            }, {
            name: 'Square',
            volumes: 30,
            x: 4.2,
            y: 50
            }, {
            name: 'Alipay',
            volumes: 150,
            x: 6.7,
            y: 50
            }, {
            name: 'Paypal',
            volumes: 180,
            x: 10.5,
            y: 50
            }];
            const chart = new this.F2.Chart({
            id: 'ordered-bubble',
            pixelRatio: window.devicePixelRatio
            });
            chart.source(data, {
            y: {
                min: 0,
                max: 100
            },
            x: {
                max: 12,
                tickInerval: 1
            }
            });
            chart.axis(false);
            chart.tooltip(false);
            chart.legend(false);
            chart.point()
            .position('x*y')
            .color('volumes', '#BAE7FF-#1890FF-#0050B3')
            .size('volumes', [ 10, 50 ])
            .shape('with-text');
            chart.render();
        },
        rose(){
            /**
             * // 声明极坐标
                chart.coord('polar');
                // 极坐标配置
                chart.coord('polar', {
                startAngle: {Number}, // 起始弧度
                endAngle: {Number}, // 结束弧度
                innerRadius: {Number}, // 用于空心部分的半径设置
                radius: {Number}, // 实心圆的半径大小设置
                transposed: true // 极坐标转置
                });
             */
            const data = [{
                year: '2001',
                population: 41.8
                }, {
                year: '2002',
                population: 25.8
                }, {
                year: '2003',
                population: 31.7
                }, {
                year: '2004',
                population: 46
                }, {
                year: '2005',
                population: 28
                }];

                const chart = new this.F2.Chart({
                id: 'rose',
                pixelRatio: window.devicePixelRatio
                });
                chart.source(data);
                chart.coord('polar');
                chart.legend({
                position: 'right'
                });
                chart.axis(false);
                chart.interval()
                .position('year*population')
                .color('year')
                .style({
                    lineWidth: 1,
                    stroke: '#fff'
                });
                chart.render();
        },
        line(){
            const data = [
                { value: 63.4, city: 'New York', date: '2011-10-01' },
                { value: 62.7, city: 'Alaska', date: '2011-10-01' },
                { value: 72.2, city: 'Austin', date: '2011-10-01' },
                { value: 58, city: 'New York', date: '2011-10-02' },
                { value: 59.9, city: 'Alaska', date: '2011-10-02' },
                { value: 67.7, city: 'Austin', date: '2011-10-02' },
                { value: 53.3, city: 'New York', date: '2011-10-03' },
                { value: 59.1, city: 'Alaska', date: '2011-10-03' },
                { value: 69.4, city: 'Austin', date: '2011-10-03' },

                { value: 149.4, city: 'Beijing', date: '2011-10-03' },
                { value: 159.4, city: 'Beijing', date: '2011-10-01' },
                { value: 59.4, city: 'Beijing', date: '2011-10-02' },
            ];
            let chart = new this.F2.Chart({
                id: 'line',
                pixelRatio: window.devicePixelRatio
            });
            chart.source(data, {
                date: {
                range: [0, 1],
                type: 'timeCat',
                mask: 'MM-DD'
                },
                value: {
                max: 300,
                tickCount: 4
                }
            });
            chart.area().position('date*value').color('city').adjust('stack');
            chart.line().position('date*value').color('city').adjust('stack');
            chart.render();
        },
        bingtu(){
            const map = {
                芳华: '40%',
                妖猫传: '20%',
                机器之血: '18%',
                心理罪: '15%',
                寻梦环游记: '5%',
                其他: '2%'
            };
            const data = [{
            name: '芳华',
            percent: 0.4,
            a: '1'
            }, {
            name: '妖猫传',
            percent: 0.2,
            a: '1'
            }, {
            name: '机器之血',
            percent: 0.18,
            a: '1'
            }, {
            name: '心理罪',
            percent: 0.15,
            a: '1'
            }, {
            name: '寻梦环游记',
            percent: 0.05,
            a: '1'
            }, {
            name: '其他',
            percent: 0.02,
            a: '1'
            }];
            const chart = new this.F2.Chart({
            id: 'bingtu',
            pixelRatio: window.devicePixelRatio
            });
            chart.source(data, {
            percent: {
                formatter: function formatter(val) {
                return val * 100 + '%';
                }
            }
            });
            chart.legend({
            position: 'bottom',
            itemFormatter: function itemFormatter(val) {
                return val + '  ' + map[val];
            }
            });
            chart.tooltip({
                showItemMaker:true,
                onShow:function onshow(ev) {
                    const items = ev.items;
                    console.log(items.length)
                    items[0] = ''
                }
            });
            chart.coord('polar', {
                transposed: true,
                radius: 0.85
            });
            chart.axis(false);
            chart.interval()
            .position('a*percent')
            .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0' ])
            .adjust('stack')
            .style({
                lineWidth: 1,
                stroke: '#fff',
                lineJoin: 'round',
                lineCap: 'round'
            })
            .animate({
                appear: {
                duration: 1200,
                easing: 'bounceOut'
                }
            });

            chart.pieLabel({
                sidePadding: 30,
                activeShape: true,
                label1: function label1(data) {
                    return {
                    text:data.name ,
                    fill: '#343434',
                    fontWeight: 'bold'
                    };
                },
                label2: function label2(data) {
                    return {
                        text: data.percent,
                        fill: '#999'
                    };
                },
                onClick: function onClick(ev) {
                    alert(ev.name);
                    console.log(ev.name);
                    // const data = ev.data;
                    // if (data) {
                    // $('#title').text(data.type);
                    // $('#money').text(data.money);
                    // }
                }
                });

            chart.render();
        },
        pielabel(){

        }
    }
}
</script>

<style scoped>
  /* #geometry{
      width: 600;
      height: 400;
  } */
</style>
