




// //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 //fa901449b25029c973b8bc6b7d33982e

 
var mat = document.querySelector("#matter");
var map = document.querySelector("#map")
async function fetchData() {
let city = document.getElementById("city").value;
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=fa901449b25029c973b8bc6b7d33982e&units=metric`)
        let data = await res.json();
        console.log('data:', data)
        //console.log('data:', data.coord.lon)

        daysData(data.coord.lon,data.coord.lat)
        // let d = new Date(data.sys.sunrise)
        // let x = d.toUTCString()
        // console.log('x:', x)
        appendKardoBhai(data)
          
    }
    catch (error) {
        
    }
 }

function appendKardoBhai(data) {
    // console.log('data:', data)
    
    // console.log('matter:', mat)
    mat.innerHTML = null;
    map.innerHTML = null;
    
    let name = document.createElement("h2");
    // console.log('name:', data.name)
    //name.innerText = "abrakadabra"
    name.innerText = `City : ${data.name}`
    let temp = document.createElement("h2"); 

    temp.innerText = `Temp : ${data.main.temp} C`

    let min_temp = document.createElement("h2");

    min_temp.innerText = `Min-Temp : ${data.main.temp_min} C`

    let max_temp = document.createElement("h2");

    max_temp.innerText = `Max-Temp : ${data.main.temp_max} C`

    let wind = document.createElement("h2");

    wind.innerText = `Wind : Degree - ${data.wind.deg} , Speed - ${data.wind.speed}`

    let clouds = document.createElement("h2");

    clouds.innerText = `Clouds : ${data.clouds.all}`
    
    let sunrise = document.createElement("h2");

    sunrise.innerText = `Sunrise : ${window
        .moment(data.sys.sunrise * 1000)
        .format("hh:mm A")}`
    
    let sunset = document.createElement("h2");
    
    sunset.innerText = `Sunset : ${window
        .moment(data.sys.sunset * 1000)
        .format("hh:mm A")}`

    let iframe = document.createElement("iframe")
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    map.append(iframe)
  
    mat.append(name,temp,min_temp,max_temp,wind,clouds,sunrise,sunset)
   // console.log('matter:', matter.innerHTML)

 }



//for 7 days

 

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//fa901449b25029c973b8bc6b7d33982e


async function daysData(lon, lat) {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=fa901449b25029c973b8bc6b7d33982e`)
        let data = await res.json();
        let ddata =  data.daily
        console.log('data:', data.daily)
        //var div = document.querySelector("#days");
        /
        each(ddata)
        //day(ddata,div)
    }
    catch (error) {
    }
}








function each(ddata) {
    document.getElementById("days").innerHTML = "";
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    for (let i = 0; i < 7; i++){
        let el = ddata[i]
        
        var meradiv = document.getElementById("days");

        let chota = document.createElement("div")

        let p = document.createElement("p");
        p.innerText = day[i];

        let img = document.createElement("img")
        img.src = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;

        let h1 = document.createElement("h2")
        h1.innerText = `${el.temp.max} C`;
        h1.setAttribute("class", "mm")
        
        let h12 = document.createElement("h2");
        h12.setAttribute("class","mm1")
        h12.innerText = `${el.temp.min} C`;

        chota.append(p, img, h1, h12);
        meradiv.append(chota)
    }
        
    
}








/////////////////////html vala /////////////

// function day(ddata,div) {
//     let sun = ddata[0];
//     let mon = ddata[1];
//     let tue = ddata[2];
//     let wed = ddata[3];
//     let thu = ddata[4];
//     let fri = ddata[5];
//     let sat = ddata[6];
//     //console.log(sun.weather[0].icon)
//     //console.log(sun.temp.day)
//     console.log(div.innerHTML)
    
    
//     var html = (`<div>
//     <p>Sun</p>
//     <img src="http://openweathermap.org/img/wn/${sun.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${sun.temp.day} C</h1>
//     <h1 class="mm1">${sun.temp.night} C</h1>
//   </div>
//   <div>
//     <p>Mon</p>
//     <img src="http://openweathermap.org/img/wn/${mon.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${mon.temp.day} C</h1>
//     <h1 class="mm1">${mon.temp.night} C</h1>
//   </div>
//   <div>
//     <p>Tue</p>
//     <img src="http://openweathermap.org/img/wn/${Tue.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${tue.temp.day} C</h1>
//     <h1 class="mm1">${tue.temp.night} C</h1>
//   </div>
//   <div>
//     <p>Wed</p>
//     <img src="http://openweathermap.org/img/wn/${wed.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${wed.temp.day} C</h1>
//     <h1 class="mm1">${wed.temp.night} C</h1>
//   </div>
//   <div>
//     <p>Thu</p>
//     <img src="http://openweathermap.org/img/wn/${thu.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${thu.temp.day} C</h1>
//     <h1 class="mm1">${thu.temp.night} C</h1>
//   </div>
//   <div>
//     <p>Fri</p>
//     <img src="http://openweathermap.org/img/wn/${fri.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${fri.temp.day}</h1>
//     <h1 class="mm1">${fri.temp.night}</h1>
//   </div>
//   <div>
//     <p>Sat</p>
//     <img src="http://openweathermap.org/img/wn/${sat.weather[0].icon}@2x.png" alt="" />
//     <h1 class="mm">${sat.temp.day}</h1>
//     <h1 class="mm1">${sat.temp.night}</h1>
//   </div>`);
//     console.log(html)
    
// //     console.log('div:', div)
// //     console.log(5)
//     // console.log(divas)
//     // let div = document.getElementById("days");
//     // div.append(divas)

// }


///http://openweathermap.org/img/wn/10d@2x.png
