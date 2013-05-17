
$(function () {
        $('#container_bar').highcharts(
        {
                chart: {type: 'bar'},
                                   
                title: {text: '结构物1因素评分'},
                                   
                //subtitle: {text: 'Source: Wikipedia.org'},
                                   
                xAxis: {
                            categories: ['环境', '受力', '变形', '应力&应变'],
                            title: {text: null}
                },
                                   
                yAxis: {
                            min: 0,
                            max:100,    //固定坐标最大值
                            title: {text: '',align: 'high'},
                            labels: {overflow: 'justify'}
                },
                                   
                //tooltip: {valueSuffix: ' 分'},
                                   
                plotOptions: {bar: {dataLabels: {enabled: true}}},
                                   
/*                legend: {
                            layout: 'vertical',
                             align: 'right',
                             verticalAlign: 'top',
                             x: 0,
                             y: 0,
                             floating: true,
                             borderWidth: 1,
                             backgroundColor: '#FFFFFF',    //图例背景颜色
                             shadow: true
                },
*/                                   
                credits: {enabled: false},
                                   
                series: [{
                             name: '结构物1',     //图例 text
                             data: [66, 31, 89, 50]
                }]
                                   
        });//$('#container_bar').highcharts
});

