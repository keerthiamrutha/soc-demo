 //wether app
    console.log("wether app");
    const citycoords={
        "delhi":{lat:28.7041,lon:77.1025},
        "mumbai":{lat:19.0760,lon:72.8777},
        "bangalore":{lat:12.9716,lon:77.5946},
        "chennai":{lat:13.0827,lon:80.2707},
        "kolkata":{lat:22.5726,lon:88.3639},
        "hyderabad":{lat:17.3850,lon:78.4867},
        "pune":{lat:18.5204,lon:73.8567},
        "ahmedabad":{lat:23.0225,lon:72.5714},
        "anantapur":{lat:14.6818,lon:77.6000},
        "hindupur":{lat:13.8281,lon:77.4810},
        "tirupati":{lat:13.6288,lon:79.4192},
    };
    document.getElementById("fetchWeatherBtn").addEventListener("click",() =>{
        let city=document.getElementById("cityInput").value.toLowerCase();

        if(!citycoords[city]){
            document.getElementById("weatherResult").innerText="city not in the list";
            return;
        }
        let coords = citycoords[city];
        let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data.current_weather){

                document.getElementById("weatherResult").innerHTML=`
            <h3>wether in ${city}</h3>
            <p>Temperature: ${data.current_weather.temperature}°C</p>
            <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
            <p>time : ${data.current_weather.time}</p>
            `;
            }else{
                document.getElementById("weatherResult").innerText="Weather data not available";
            }
                })
            .catch(err=>{
                console.error("Error fetching weather data:",err);
                document.getElementById("weatherResult").innerText="Error fetching weather data";
            });
    });     