import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

  WeatherData : any;
  constructor() { }
  clear ?: boolean;

  ngOnInit(): void {
    this.getWeatherDataListe(1);
  }

  getWeatherDataListe(x:number){

    let data = [JSON.parse('{"coord": {"lon": -122.08, "lat": 37.39 }, "weather": [ { "id": 800,"main": "Clear","description": "clear sky","icon": "01d" }],"base": "stations","main": {"temp": 282.55, "feels_like": 281.86,"temp_min": 280.37,"temp_max": 284.26, "pressure": 1023,"humidity": 100 },"visibility": 16093,"wind": {"speed": 1.5,"deg": 350},"clouds": {"all": 1 },"dt": 1560350645,"sys": {"type": 1,"id": 5122, "message": 0.0139, "country": "US","sunrise": 1560343627, "sunset": 1560396563 },"timezone": -25200,"id": 420006353, "name": "Mountain View","cod": 200}'),
    JSON.parse('{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":281.49,"feels_like":278.61,"temp_min":279.98,"temp_max":282.59,"pressure":1026,"humidity":70},"visibility":10000,"wind":{"speed":5.14,"deg":300},"clouds":{"all":75},"dt":1642609280,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1642578946,"sunset":1642609572},"timezone":0,"id":2643743,"name":"London","cod":200}'),
    JSON.parse('{"coord":{"lon":9,"lat":34},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":287.04,"feels_like":285.32,"temp_min":287.04,"temp_max":287.04,"pressure":1029,"humidity":32,"sea_level":1029,"grnd_level":1026},"visibility":10000,"wind":{"speed":3.23,"deg":264,"gust":4.1},"clouds":{"all":0},"dt":1642609550,"sys":{"type":1,"id":1197,"country":"TN","sunrise":1642573681,"sunset":1642610455},"timezone":3600,"id":2464461,"name":"Tunisia","cod":200}'),
    JSON.parse('{"coord":{"lon":3,"lat":28},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":289.26,"feels_like":287.47,"temp_min":289.26,"temp_max":289.26,"pressure":1024,"humidity":21,"sea_level":1024,"grnd_level":965},"visibility":10000,"wind":{"speed":3.91,"deg":85,"gust":4.7},"clouds":{"all":86},"dt":1642609833,"sys":{"country":"DZ","sunrise":1642574393,"sunset":1642612625},"timezone":3600,"id":2589581,"name":"Algeria","cod":200}'),
    JSON.parse('{"coord":{"lon":-5,"lat":32},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":284.16,"feels_like":282.86,"temp_min":284.16,"temp_max":284.16,"pressure":1025,"humidity":59,"sea_level":1025,"grnd_level":874},"visibility":10000,"wind":{"speed":1.92,"deg":150,"gust":1.4},"clouds":{"all":42},"dt":1642609910,"sys":{"type":1,"id":2391,"country":"MA","sunrise":1642576787,"sunset":1642614071},"timezone":3600,"id":2542007,"name":"Morocco","cod":200}'),
    JSON.parse('{"coord":{"lon":-3.7396,"lat":5.2038},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":306.14,"feels_like":312.29,"temp_min":306.14,"temp_max":306.14,"pressure":1010,"humidity":59,"sea_level":1010,"grnd_level":1009},"visibility":10000,"wind":{"speed":4.31,"deg":192,"gust":5.11},"clouds":{"all":54},"dt":1642610235,"sys":{"type":1,"id":1162,"country":"CI","sunrise":1642573777,"sunset":1642616475},"timezone":0,"id":2288873,"name":"France","cod":200}'),
    JSON.parse('{"coord":{"lon":139.7531,"lat":35.6854},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":275.38,"feels_like":275.38,"temp_min":270.25,"temp_max":278.59,"pressure":1013,"humidity":55},"visibility":10000,"wind":{"speed":0.89,"deg":286,"gust":1.79},"clouds":{"all":20},"dt":1642610377,"sys":{"type":2,"id":268105,"country":"JP","sunrise":1642628909,"sunset":1642665290},"timezone":32400,"id":1861060,"name":"Japan","cod":200}'),
    JSON.parse('{"coord":{"lon":12.8333,"lat":42.8333},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":278.17,"feels_like":277.06,"temp_min":274.83,"temp_max":280.2,"pressure":1028,"humidity":79,"sea_level":1028,"grnd_level":945},"visibility":10000,"wind":{"speed":1.55,"deg":190,"gust":1.49},"clouds":{"all":0},"dt":1642610424,"sys":{"type":2,"id":197838,"country":"IT","sunrise":1642574068,"sunset":1642608228},"timezone":3600,"id":3175395,"name":"Italy","cod":200}'),
    JSON.parse('{"coord":{"lon":-8,"lat":39.5},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":283.61,"feels_like":282.23,"temp_min":283.61,"temp_max":286.49,"pressure":1028,"humidity":58,"sea_level":1028,"grnd_level":1014},"visibility":10000,"wind":{"speed":1.3,"deg":83,"gust":1.3},"clouds":{"all":0},"dt":1642610447,"sys":{"type":2,"id":19163,"country":"PT","sunrise":1642578531,"sunset":1642613767},"timezone":0,"id":2264397,"name":"Portugal","cod":200}'),
    JSON.parse('{"coord":{"lon":-0.8141,"lat":38.6767},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":282.15,"feels_like":282.15,"temp_min":281.09,"temp_max":282.7,"pressure":1028,"humidity":57,"sea_level":1028,"grnd_level":961},"visibility":10000,"wind":{"speed":0.49,"deg":123,"gust":1.25},"clouds":{"all":0},"dt":1642610471,"sys":{"type":2,"id":2007367,"country":"ES","sunrise":1642576684,"sunset":1642612165},"timezone":3600,"id":6355428,"name":"Cañada","cod":200}')
    ];
    this.setWeatherData(data[x]);
  }

  setWeatherData(data : any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset*1000);
    let sunriseTime = new Date(this.WeatherData.sys.sunrise*1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString();
    
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp -273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min -273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max -273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like -273.15).toFixed(0);

    if(this.WeatherData.weather[0].description == "clear sky"){
      this.clear = true;
    } 
    else this.clear = false;
  }

  randomCity(){
    let x =   Math.floor(Math.random() * 10);
   this.getWeatherDataListe(x);
   let colors = ["blue","green","purple","rgb(8,7,42,1)"];
   const myElement = document.getElementById("divWeather");
   if(myElement != null){

      myElement.style.background = colors[Math.floor(Math.random() * 4)];

    }
}

}
