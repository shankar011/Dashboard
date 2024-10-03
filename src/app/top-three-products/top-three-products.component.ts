import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent {

  chart = new Chart({
    chart: {
      type: 'bar',
      height:225
    },
    title: {
      text: 'Top 3 products'
    },
    xAxis: {
      categories: [
      'Lenovo Thikpad E15',
      'Nectar Orange Juice',
      'Axe Deodarant'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      
      {
        type:"bar",
        showInLegend:false,
        data:[
          {
            name: 'Lenovo Thikpad E15',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 836,
            color: '#7e0505',
          },
          {
            name: 'Axe Deodarant',
            y: 225,
            color: '#ed9e20',
          },
          
        ]
      }

    ],
    credits:{
      enabled:false
    }
  });

}
