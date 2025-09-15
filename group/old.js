console.log("hour 1: intro to js");
let studentName = "John Doe";
let Books = {
    name: ["book1", "book2", "book3"],
    title: ["title1", "title2", "title3"],
    author: ["author1", "author2", "author3"],
    cost: [100, 200, 300],
};
console.log("Books:", Books);

//converting object to json string

let jsonString = JSON.stringify(Books);
console.log("jsonString:", jsonString);

//converting json string back to object

let parsedObject = JSON.parse(jsonString);
console.log("parsedObject:", parsedObject);

console.log("hour 2: loops in js");
fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") //fetching data from api
    .then((response) => response.json()) //converting response to json
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));

    fetch("https://jsonplaceholder.typicode.com/users") //fetching data from api
    .then(res=>res.json()) //converting response to json
    .then(users=>{
        let output="<h3>Users</h3><ul>";
        users.forEach(user=>{
            output+=`<li>${user.name} (${user.email})</li>`;
        })
        output+="</ul>";
        document.body.innerHTML+=output;
    });

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
    document.getElementById("fetchweatherBtn").addEventListener("click",() =>{
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