<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Weather App using Class</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;div class="weather"&gt;

 &lt;h2&gt;Weather App&lt;/h2&gt;

 &lt;form&gt;
  &lt;label for="city"&gt;Enter a location for weather information&lt;/label&gt;
  
  &lt;input type="text" name="city"&gt;
 &lt;/form&gt;
        
 &lt;div class="card d-none"&gt;
  &lt;img src="../images/day.svg" class="time"&gt;
  &lt;div class="icon"&gt;
   &lt;img src="../images/icons/1.svg" alt=""&gt;
  &lt;/div&gt;
 
  &lt;div class="details"&gt;
   &lt;h5&gt;Manchester&lt;/h5&gt;
   &lt;div class="weathertext"&gt;Sunny&lt;/div&gt;
   &lt;div class="weathertemp"&gt;31&deg;C&lt;/div&gt;
  &lt;/div&gt;
 &lt;/div&gt;
&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
//weather information

const key = 'WcGsEhyV4VYJOan1hzGq2N6xOj8G00YE';

// get weather information
const getWeather = async (id) => {

 const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
 const query = `${id}?apikey=${key}`;

 const response = await fetch(base + query);
 const data = await response.json();

  return data[0];
};

// get city information
const getCity = async (city) => {

 const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
 const query = `?apikey=${key}&q=${city}`;

 const response = await fetch(base + query);
 const data = await response.json();

  return data[0];
};


///////////////////////////////////////////

//UI
const cityForm = document.querySelector('.weather form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
 // destructure properties
 //const cityDets = data.cityDets;
 //const cityDets = data.weather;
 //shorten to:
 const { cityDets, weather } = data;

 // update details template
 details.innerHTML = `
  &lt;h5&gt;${cityDets.EnglishName}&lt;/h5&gt;
  &lt;div class="weathertext"&gt;${weather.WeatherText}&lt;/div&gt;
  &lt;div class="weathertemp"&gt;${weather.Temperature.Metric.Value}&deg;C&lt;/div>
`;

// update the night/day & icon images
 const iconSrc = `../images/icons/${weather.WeatherIcon}.svg`;
 icon.setAttribute('src', iconSrc);
  
 const timeSrc = weather.IsDayTime ? '../images/day.svg' : '../images/night.svg';
 time.setAttribute('src', timeSrc);

// remove the d-none class if present
 if(card.classList.contains('d-none')){
  card.classList.remove('d-none');
 }
};

const updateCity = async (city) => {
 
 const cityDets = await getCity(city);
 const weather = await getWeather(cityDets.Key);
 return { cityDets, weather };
};

cityForm.addEventListener('submit', e => {
// prevent default action
 e.preventDefault();
  
// get city value
const city = cityForm.city.value.trim();
cityForm.reset();

// update the ui with new city
 updateCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));

// set local storage
 localStorage.setItem('city', city);
});
// check local storage
if(localStorage.getItem('city')){
 updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
}</code></pre>

<pre><code class="lang-scss">//scss
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
}</code></pre>
<hr />
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
};
</script>