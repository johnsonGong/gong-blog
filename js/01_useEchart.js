/**
 * 使用 echartJS.
 * 
 * @author gonglong 20170113
 **/
;
(function(window, $) {

    initChartBar();
    initChartForce_1();

    function initChartBar() {

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
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                //              type: 'value',
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }],

        };

        myChart_01.setOption(options);

    };

    // 层次-树状结构.
    function initChartForce_1() {

        var myChart_02 = echarts.init(document.getElementById('chart_02'));

        myChart_02.showLoading();
//         $.get('./data/les-miserables.gexf', function(xml) {
           // $.get('http://127.0.0.1:8020/person/data/mock.gallery.json ', function(xml) {
           $.get('./person/data/mock.gallery.json ', function(xml) {
            myChart_02.hideLoading();

            // var graph = echarts.dataTool.gexf.parse(xml);
            var graph = xml;
            var categories = [];
            for(var i = 0; i < 9; i++) {
                categories[i] = {
                    name: '类目-' + i
                };
            }
            graph.nodes.forEach(function(node) {
                node.itemStyle = null;
                node.value = node.symbolSize;
                node.symbolSize /= 1.5;
                node.label = {
                    normal: {
                        show: node.symbolSize > 30
                    }
                };
                node.category = node.attributes.modularity_class;
            });
            var options = {
                title: {
                    text: 'Les Miserables',
                    subtext: 'Default layout',
                    top: 'bottom',
                    left: 'right'
                },
                tooltip: {},
                legend: [{
                    // selectedMode: 'single',
                    data: categories.map(function(a) {
                        return a.name;
                    })
                }],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [{
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: categories,
                    roam: true,
                    label: {
                        normal: {
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    lineStyle: {
                        normal: {
                            // 'source','target', '#000000'
                            color: 'source',
                            curveness: 0.1,
                            width: 3,
                            // solid, dashed, dotted
                            type: 'solid'
                        }
                    }
                }],
                
//              dataZoom:[
//              {
//                  id: 'dataZoomX',
//                  type:'inside',
//                  filterMode: 'filter',
//              }
//              ],
                
//              xAxis:{
//                  type: 'value',
//              }
            };

            myChart_02.setOption(options);
        }, 'json');

    };

}(window, jQuery));
