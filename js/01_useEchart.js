/**
 * 使用 echartJS.
 * 
 * @author gonglong 20170113
 **/
;(function(window) {

    initChartBar();
    
    
    
    
    function initChartBar(){
        
        var myChart_01 = echarts.init(document.getElementById('chart_01'));

        var options = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
    
        myChart_01.setOption(options);
        
    };
    
    // 层次-树状结构.
    function initChartForce_1() {
        
        var options = {
            'type': "graph",
        };
    };

}(window));