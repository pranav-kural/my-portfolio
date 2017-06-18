<template lang="html">
      <div class="uk-section" style="background-color: #fff;margin:3em; padding-top:0; padding-bottom:0">
        <div class="uk-padding-small uk-child-width-1-1" style="font-family: 'Montserrat'" uk-grid>
          <p class="uk-text-small">
            I've gained a valuable insight into various spheres of the web and software industry, ranging from Web development based on MEAN stack, using PHP (Laravel) or a CMS (Shopify & WordPress) to Software development based on Rapid Application Development methodology as well as building desktop and software applications from scratch using programming languages such as C# (.NET framework), Java and Python. I've got extensive exposure to working with relational databases using MySQL and Microsoft SQL Server as well as working with non-relational databases like MongoDB and Redis. I've aslo learnt and have experience working with Mainframe Operating systems like zOS.
          </p>
          <p class="uk-text-small">
            I've got the opportunity to work with a lot of frameworks and libraries: <strong>Web Development frameworks</strong>(MVC/MVVM/MV*) like AngularJS, Angular (2 & 4), React, Vue.js, Inferno, <strong>Object Relational Mapping frameworks</strong> like PHP ActiveRecord and Entity Framework, and <strong>CSS frameworks</strong> like Bootstrap, Zurb Foundtaion, Semantic-UI, Uikit etc.
          </p>
          <p class="uk-text-small">
            Besides the techinal skills, I've learnt to be more professional and a better communicator, espically through my work experience which involved working in a team and interacting with the clients. I'm passionate about what I do, and believe in being punctual and responsible for my tasks and duties. I've good time management skills, and a critical and analytical mindset. I'm a fast learner and love to learn new things. I'm self-motivated with a desire to perform my best at everything I do.
          </p>
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
