import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() name : string = "";
  @Input() id : string = "";

  weather: any = null;

  constructor() { }

  ngOnInit(): void {
    if (this.id) {
      fetch(`https://www.metaweather.com/api/location/${this.id}/`)
        .then(async response => {
          if (response.status !== 200) {
            console.log(response.status, await response.text());
            return
          }

          this.weather = JSON.parse(await response.text())[0];
        })
    }
  }

}
