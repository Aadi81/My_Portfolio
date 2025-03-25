function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "766eed0d187783b5434853db27a940d1"; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod == 200) {
            document.getElementById("city-name").innerText = data.name + ", " + data.sys.country;
            document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + "°C";
            document.getElementById("description").innerText = "Weather: " + data.weather[0].description;
        } else {
            alert("City not found! Please enter a valid city name.");
        }
    })
    .catch(error => console.log("Error: ", error));
}
