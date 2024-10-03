import * as Highcharts from 'highcharts';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';  // Chart should come from angular-highcharts

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent {

  chart = new Chart({
    chart: {
      type: 'line',
      height:325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: 'Arizona',
        type: 'line', 
        data: [70, 69, 95, 145, 183, 215, 252, 265, 233, 183, 159, 196]
      },
      {
        name: 'Connecticut',
        type: 'line', 
        color:"#7e0505",
        data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 98, 156]
      },

      {
        name:"Ohio",
        type:'line',
        color:"#ed9e20",
        data:[17,22,14,25,18,19,22,43,11,32,29,59]
      }
    ],
    credits:{
      enabled:false
    }
  });

}
