// visitors chart
var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [30,40,70,120,49,60,70,91,125,123,140]
    }],
    xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec']
    }
}

var chart = new ApexCharts(document.querySelector("#visitorChart"), options);

chart.render();


// locationChart 
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['Asia', 'Africa', 'Europe', 'America', 'Australia'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#locationChart"), options);
chart.render();


// osChart
      
var options = {
  series: [76, 67, 61, 90],
  chart: {
  height: 390,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
legend: {
  show: true,
  floating: true,
  fontSize: '16px',
  position: 'left',
  offsetX: 160,
  offsetY: 15,
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName, opts) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#osChart"), options);
chart.render();