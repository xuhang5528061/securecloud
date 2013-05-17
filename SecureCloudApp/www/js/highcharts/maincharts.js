struc = new Structure(1,"边坡1");

var options_gauge= {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    
    title: {text: struc.structurename+'总体评分'},
    
    pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
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
    ]},
    
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
        plotBands: [{
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
    
    series: [{
         name: 'Speed',
         data: [0],
         tooltip: {valueSuffix: ' km/h'}
    }]
    
}


var options_bar = {
    chart: {type: 'bar'},
    
    title: {text: struc.structurename+'因素评分'},
    
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
    credits: {enabled: false},
    
series: [{
         name: struc.structurename,     //图例 text
         data: [0,0,0,0]
         }]
}

$(function(){
  $("#queryA").attr("href","history.html?struc="+struc.structureId+"#"+struc.structurename);
  $('#container').highcharts(options_gauge);
  $('#container_bar').highcharts(options_bar);
  requestData();
  setInterval(requestData,3000);
  })

function requestData() {
  $.get('http://192.168.1.134/SecureCloud.svc/LatestScore?sid='+struc.structureId,function(results){
       
        var chart_bar = $('#container_bar').highcharts();
        chart_bar.series[0].setData([results.d.EnvironmentScore,results.d.ForceScore,results.d.DeformationScore,results.d.StressStrainScore]);
        var chart_gauge = $('#container').highcharts();
        chart_gauge.series[0].data[0].update(results.d.StructureTotalScore);
        })
  
  }

