
$(function () {
  
    $('#container').highcharts(
            //--------------------------part 1 ---------------------------//
            {                             
                    chart: {
                             type: 'gauge',
                             plotBackgroundColor: null,
                             plotBackgroundImage: null,
                             plotBorderWidth: 0,
                             plotShadow: false
                    },
                             
                    title: {text: '结构物1总体评分'},
                             
                    pane: {
                             startAngle: -150,
                             endAngle: 150,
                             background: [
                                {
                                    backgroundColor: {
                                          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                          stops: [[0, '#FFF'],[1, '#333']]
                                    },
                                    borderWidth: 0,
                                    outerRadius: '109%'
                                },
                                {
                                    backgroundColor: {
                                          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                          stops: [[0, '#333'],[1, '#FFF']]
                                    },
                                    borderWidth: 1,
                                    outerRadius: '107%'
                                },
                                {
                                    // default background
                                },
                                {
                                          backgroundColor: '#DDD',
                                          borderWidth: 0,
                                          outerRadius: '105%',
                                          innerRadius: '103%'
                                }
                             ]
                    },
                             
                    // the value axis
                    yAxis: {
                             min: 0,
                             max: 100,   //量程
                             
                             minorTickInterval: 'auto',
                             minorTickWidth: 1,
                             minorTickLength: 6,  //仪表盘刻度线(小)的长度
                             minorTickPosition: 'inside',
                             minorTickColor: '#666',  //仪表盘刻度(小)颜色
                             
                             tickPixelInterval: 30,
                             tickWidth: 2,
                             tickPosition: 'inside',
                             tickLength: 10,
                             tickColor: '#666',  //仪表盘刻度(大)颜色
                             labels: {step: 2,rotation: 'auto'}, //step:标示刻度数的间隔，每2个刻度线(大)标示一个刻度值
                             //title: {text: 'km/h'},
                             plotBands: [
                                    {
                                         from: 0,
                                         to: 50,
                                         color: '#DF5353' // red
                                    },
                                    {
                                         from: 50,
                                         to: 80,
                                         color: '#DDDF0D' // yellow
                                    },
                                    {
                                         from: 80,
                                         to: 100,
                                         color: '#55BF3B' // green
                                    }
                             ]
                    },
/*
                    plotOptions:{
                             gauge:{
                                         dataLabels:{
                                                        enabled:false
                                         }
                             }
                    },
*/
                             
                    series: [{
                                      name: 'Speed',
                                      data: [80],
                                      tooltip: {valueSuffix: ' km/h'}
                    }]
                             
            },//end 1
                               
            //--------------------------part 2 ---------------------------//                       
            // Add some life
            function (chart) {
                    if (!chart.renderer.forExport) {
                             setInterval(function () {
                                         var point = chart.series[0].points[0],
                                             newVal,
                                             inc = Math.round((Math.random() - 0.5) * 20);
                                             newVal = point.y + inc;
                                         if (newVal < 0 || newVal > 200) {newVal = point.y - inc;}
                                         
                                         point.update(newVal);
                                         
                             }, 3000);
                    }
            }//end 2
                               
    );//$('#container').highcharts
});//$(function (){---})
