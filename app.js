window.addEventListener('load', () => {
  let lon;
  let lat;
  let temperatureDesc = document.getElementById('desc');
  let temperatureTemp = document.getElementById('temp');
  let locationIcon = document.getElementById('icon')
  let locationName = document.getElementById('location');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      lon = pos.coords.longitude
      lat = pos.coords.latitude

      let key = '0d068c9d95554974ac0a7e0286ec49aa';

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
        .then(res => { return res.json() })
        .then(data => { 
          console.log(data); 
          const {temp, feels_like} = data.main
          const {icon, description} = data.weather[0]
          const name = data.name
          const {country} = data.sys

          temperatureTemp.textContent = `${Math.round(temp)} °C`
          temperatureDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1)
          locationName.textContent = `${name}, ${country}`

          iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
          locationIcon.innerHTML = "<img src='"  + iconUrl + "' class='iconid'>"
        })
    })
  }
})

submitBtn = document.getElementById('search-btn');
search = document.getElementById('search').value


submitBtn.addEventListener('click', (e) => {
  console.log('is string')
  // e.preventDefault();
  // fetch(`api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`)
  //   .then(res => { return res.json() })
  //       .then(data => { 
  //         console.log(data); 
  //         const {temp, feels_like} = data.main
  //         const {icon, description} = data.weather[0]
  //         const name = data.name
  //         const {country} = data.sys

  //         temperatureTemp.textContent = `${Math.round(temp)} °C`
  //         temperatureDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1)
  //         locationName.textContent = `${name}, ${country}`

  //         iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
  //         locationIcon.innerHTML = "<img src='"  + iconUrl + "' class='iconid'>"
  //       })
      }
)
