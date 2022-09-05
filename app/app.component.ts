import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

constructor(private weatherService: WeatherService){

}

cloud_pct : any;
temp: any;
feels_like: any;
humidity: any;
min_temp: any;
max_temp: any;
wind_speed: any;
wind_degrees: any;
sunrise: any;
sunset: any;
x:any;
  
 


 
 cityName: string = 'Mumbai';
 weatherData?: WeatherData;


  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    


   

  }

  onsubmit() {
    this.getWeatherData(this.cityName);
    this.x=this.cityName;
    this.cityName = '';
    console.log(this.x);

  }

   private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response)=> {

        this.weatherData = response;
        console.log(response);
      }
    });

   }
}