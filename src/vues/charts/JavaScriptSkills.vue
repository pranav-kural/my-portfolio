<template lang="html">
  <div class="uk-column-1-1">
    <div class="uk-text-small uk-text-center">
      <h2 class="uk-visible@m uk-heading-divider">My JavaScript Skills</h2>
      <p>TBH, when I started learning JavaScript for the very first time, I hated it. But now that I've learnt it more deeply and worked with, I absolutely love it &#x1F60D</p>
      <p class="uk-text-meta uk-text-center">My skills in JavaScripts:</p>
    </div>
    <div class="uk-grid uk-child-width-1-3@m uk-child-width-1-1@s">
      <ul class="uk-list uk-list-divider">
        <li>Good understanding of the JavaScript language</li>
        <li>TypeScript and CoffeScript</li>
        <li>JQuery and JQuery UI</li>
        <li>NodeJS (Express, Meteor)</li>
        <li>Up-to-date with ES7 Specifications</li>
        <li>Using trancompilers, task runners and other build tools like Babel, Browserify, Gulp, Grunt and Webpack</li>
    </ul>
    <div class="uk-margin-top uk-visible@m">
      <div id="gaugeChart" style="width: 400px; height: 400px; margin: 0 auto"></div>
    </div>
    <ul class="uk-list uk-list-divider">
      <li>MEAN Stack</li>
      <li>Knowledge of AngularJS, Angular (2 & 4), React, Vue.js and Inferno.js</li>
      <li>Knowledge of Asynchronous programming (observable streams and using promises).</li>
      <li>Planning, creating and integrating Web APIs and working with external APIs</li>
      <li>Knowledge and understanding of the state management libraries like Redux &#x1F499, RxJS and Vuex.</li>
  </ul>
   </div>
  </div>
</template>

<script>
var Highcharts = require('highcharts');
require('highcharts-more')(Highcharts);
// Rounded panes
require('highcharts/modules/solid-gauge')(Highcharts);
// Unrounded panes
//require('highcharts-solid-gauge')(Highcharts);

let colors = ['#F62366', '#9DFF02', '#0CCDD6', '#033E41', '#2F4D00', '#4A0A1F'];

let options = {
    chart: {
        type: 'solidgauge',
        marginTop: 50
    },

    title: {
        text: 'Top 3 frameworks I\'ve Worked With',
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '<span>{point.y}%</span><br><span style="font-size:1.2em; color: {point.color}; font-weight: bold">{series.name}</span>',
        positioner: function (labelWidth) {
            return {
                x: 200 - labelWidth / 2,
                y: 180
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: colors[5],
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor:colors[4],
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor:colors[3],
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
    legend: {
      labelFormatter: function() {
        return '<span style="text-weight:bold;color:' + this.userOptions.color + '">' + this.name + '</span>';
      },
      symbolWidth: 0
    },

    series: [{
        name: 'Angular',
      	marker: {enabled:false},
      	borderColor: colors[0],
      	color: colors[0],
        data: [{
            color: colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }],
      showInLegend: true
    }, {
        name: 'Vue',
        marker: {enabled:false},
        borderColor: colors[1],
        color: colors[1],
        data: [{
            color: colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }],
      showInLegend: true
    }, {
        name: 'React',
        marker: {enabled:false},
        borderColor: colors[2],
        color: colors[2],
        data: [{
            color: colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }],
      showInLegend: true
    }]
};
var themeOptions = {
        chart: {
            backgroundColor: 'white'
        },
        colors: colors,
        title: {
            style: {
                color: 'silver'
            }
        },
        tooltip: {
            style: {
                color: 'silver'
            }
        }
    };

export default {
  name: 'JavaScriptSkills',
  data() {
    return {
      options: {},
      themeOptions: themeOptions
    }
  },
  created() {
    // set the chart theme
    // Make a copy of the defaults, call this line before any other setOptions call
    var HCDefaults = $.extend(true, {}, Highcharts.getOptions(), {});

    // reference to defaultOptions
    var defaultOptions = Highcharts.getOptions();
    for (var prop in defaultOptions) {
        if (typeof defaultOptions[prop] !== 'function') delete defaultOptions[prop];
    }

    // Fall back to the defaults that we captured initially, this resets the theme
    Highcharts.setOptions(HCDefaults);
  },
  mounted() {
    // set the new theme
    Highcharts.setOptions(themeOptions);
    // create the gauge chart
    Highcharts.chart('gaugeChart', options);
  }
}
</script>

<style lang="css">
.uk-column-1-1 p {
  font-family: Montserrat;
}
</style>
