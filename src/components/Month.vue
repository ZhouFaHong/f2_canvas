<template>
    <div class="per">
        <h1>Month</h1>
        <canvas id='mon' style="width: 100%;height: 300px;"></canvas>
    </div>
</template>

<script>
export default {
    mounted(){
        /**
         * 度量 Scale：https://www.yuque.com/antv/f2/scale
         */
        const data = [
            { month: 0, tem: 7, city: 'Tokyo' },
            { month: 1, tem: 6.9, city: 'Tokyo' },
            { month: 2, tem: 9.5, city: 'Tokyo' },
            { month: 3, tem: 14.5, city: 'Tokyo' },
            { month: 4, tem: 18.2, city: 'Tokyo' },
            { month: 5, tem: 21.5, city: 'Tokyo' },
            { month: 6, tem: 25.2, city: 'Tokyo' },
            { month: 7, tem: 27.2, city: 'Tokyo' },
            { month: 8, tem: 30.2, city: 'Tokyo' },
            { month: 9, tem: 32.2, city: 'Tokyo' },
            { month: 10, tem: 35.2, city: 'Tokyo' },
            { month: 11, tem: 38.2, city: 'Tokyo' },
        ];
        const defs = {
            month: {
                type: 'cat',
                values: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月',] // 这时候 month 的原始值是索引值
            }
        };

        const chart = new this.F2.Chart({
            id: 'mon',
            width: 800,
            height: 250,
            pixelRatio: window.devicePixelRatio
        });
        chart.source(data, defs);
        chart.legend({
            align: 'center',
            itemWidth: null
        });
        chart.interval()
        .position('month*tem')
        .color('pink');
        chart.render();
    }
}
</script>