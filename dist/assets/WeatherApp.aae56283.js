import{_ as e}from"./index.58a79006.js";import{o as t,c as a,a as n}from"./vendor.8c156a9e.js";const i={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},c=n("h3",{class:"page-title"},"Weather App",-1),s=n("blockquote",null,[n("p",null,"to come")],-1),o=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -->
<div class="weather">

 <h2>Weather App</h2>

 <form>
  <label for="city">Enter a location for weather information</label>
  
  <input type="text" name="city">
 </form>
        
 <div class="card d-none">
  <img src="../images/day.svg" class="time">
  <div class="icon">
   <img src="../images/icons/1.svg" alt="">
  </div>
 
  <div class="details">
   <h5>Manchester</h5>
   <div class="weathertext">Sunny</div>
   <div class="weathertemp">31\xB0C</div>
  </div>
 </div>
</div>`)],-1),l=n("pre",null,[n("code",{class:"lang-js"},`//js
//weather information

 class Forecast {
 constructor(){
  this.key = 'your key';
  this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
  this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
 }
 async updateCity(city){
  const cityDets = await this.getCity(city);
  const weather = await this.getWeather(cityDets.Key);
   return { cityDets, weather };
 }
 async getWeather(id){
  const query = \`\${id}?apikey=\${this.key}\`;
  const response = await fetch(this.weatherURI + query);
  const data = await response.json();
   return data[0];
 }
 async getCity(city){
  const query = \`?apikey=\${this.key}&q=\${city}\`;
  const response = await fetch(this.cityURI + query);
  const data = await response.json();
   return data[0];
 }
}


///////////////////////////////////////////

//UI
const cityForm = document.querySelector('.weather form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
//destructure properties
//const cityDets = data.cityDets;
//const cityDets = data.weather;
//shorten to:
const { cityDets, weather } = data;

// update details template
 details.innerHTML = \`
  <h5>\${cityDets.EnglishName}</h5>
  <div class="weathertext">\${weather.WeatherText}</div>
  <div class="weathertemp">\${weather.Temperature.Metric.Value}\xB0C</div>
  \`;

// update the night/day & icon images
 const iconSrc = \`../images/icons/\${weather.WeatherIcon}.svg\`;
 icon.setAttribute('src', iconSrc);
  
 const timeSrc = weather.IsDayTime ? '../images/day.svg' : '../images/night.svg';
 time.setAttribute('src', timeSrc);

// remove the d-none class if present
 if(card.classList.contains('d-none')){
  card.classList.remove('d-none');
 }
};

cityForm.addEventListener('submit', e => {
//prevent default action
 e.preventDefault();
  
//get city value
 const city = cityForm.city.value.trim();
 cityForm.reset();

//update the ui with new city
 forecast.updateCity(city)
 .then(data => updateUI(data))
  .catch(err => console.log(err));

 //set local storage
 localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
 forecast.updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
}`)],-1),d=n("pre",null,[n("code",{class:"lang-scss"},`//scss
.weather{
 max-width: 800px;
 background: $light-gray;
 letter-spacing: 0.2em;
 font-size: 0.8rem;
 @include margin($spacer*2 auto);
 @include padding($spacer null);

  h2 {
   text-align: center;
   @include padding(math.div($spacer, 2) null $spacer null);
   font-size: 2.5rem;
   color: $dark-gray;
  }

  form {
   max-width: 400px;
   padding-bottom: $spacer;
   @include margin(null auto);

    label {
     margin-bottom: .5rem;
     text-align: center;
     color: $medium-gray;
    }

    input,
    input:focus {
     width: 100%;
     padding: 18px;
     color: $medium-gray;
    }
  }

  .card {
   position: relative;
   @include margin(null auto);
   max-width: 400px;
   display: flex;
   flex-direction: column;
   min-width: 0;
   background-color: $white;
   border: 1px solid rgba(0,0,0, .125);
   border-radius: .25rem;
   box-shadow: 0 1rem 3rem rgba(0,0,0,.175);

    img {
     vertical-align: middle;
     width: 100%;
     border-top-left-radius: calc(.25rem - 1px);
     border-top-right-radius: calc(.25rem - 1px);
    }
  
 .icon{
  position: relative;
  top: -50px;
  border-radius: 50%;
  width: 100px;
  @include margin(null auto -50px auto);
  text-align: center;
  background-color: $light-gray;
 }

 .details {
  text-transform: uppercase;
  text-align: center;

   h5 {
    @include margin(1rem null);
    font-size: 1.25rem;
   }

  .weathertext {
   @include margin(1rem null);
  }
  
  .weathertemp {
   @include margin(1.3rem null);
   font-family: $alt-font;
   font-size: 3.5rem;
   font-weight: 300;
   line-height: 1.2;
  }
 }
}

.d-none {
 display: block;
 }
}`)],-1),h=n("hr",null,null,-1),m=[c,s,o,l,d,h];function u(p,g,y,w,v,f){return t(),a("div",r,m)}var $=e(i,[["render",u]]);export{$ as default};
