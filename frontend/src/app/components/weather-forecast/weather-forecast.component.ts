import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent{

  weatherData: any[] = []; // API'den gelen veri
  isLoading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  fetchWeatherForecast(): void {
    this.isLoading = true;
    this.weatherService.getWeatherForecast().subscribe({
      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching weather data:', err);
        this.isLoading = false;
      }
    });
  }
}
