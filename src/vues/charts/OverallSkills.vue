<template lang="html">
      <div class="uk-section" style="background-color: #fff;margin:3em; padding-top:0; padding-bottom:0">
        <div class="uk-padding-small uk-child-width-1-1" style="font-family: 'Montserrat'" uk-grid>
          <div>
            <highcharts v-bind:options="options"></highcharts>
          </div>
        </div>
      </div>
</template>

<script>
import Vue from 'vue';
import VueHighcharts from 'vue-highcharts';
// instansiate the use of Highcharts
Vue.use(VueHighcharts);

// the overall skills bar graph options
var options = {
    chart: {
        type: 'column'
    },
    title: {
        text: "Overall programming skills/experience"
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [
            'C#',
            'Java',
            'PHP',
            'JavaScript',
            'NodeJS',
            'CSS',
            'HTML',
            'MySQL',
            'MongoDB'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,
        tickInterval: 50,
        title: {
            text: null,
            style: { "color": "#333333", "fontSize": "14px","word-spacing": "10px" }
        },
        labels: {
        formatter: function() {
            var dataLabels = {
                0: 'Novice',
                50: 'Intermediate',
                100: 'Expert'
            };
            return dataLabels[this.value] !== 'undefined' ? dataLabels[this.value] : this.value;
        }
    }
    },
    tooltip: {
        headerFormat: '<span style="color:{series.color}">{point.key}</span>',
        pointFormat: '<br>',
        footerFormat: '',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
    		showInLegend: false,
    		name:'My Skills',
        data: [63.9, 71.5, 69.4, 88.2, 73.0, 90.0, 99.0, 81.0, 49.9]

    }]
};
var themeOptions = {
   colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: 'Lato, sans-serif'
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '16px',
         fontWeight: 'bold'
      }
   },
   subtitle: {
      style: {
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },

   // General
   background2: '#E0E0E8'
};

export default {
  name: 'OverallSkills',
  data() {
    return {
      options: options,
      themeOptions: themeOptions
    }
  },
  created() {
    // set the chart theme
    this.Highcharts.setOptions(themeOptions);
  }
}
</script>

<style lang="css">
</style>
