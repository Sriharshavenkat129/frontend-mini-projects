const weatherform = document.querySelector('.weatherform');
const weathercity = document.getElementById('weathercity');
const card = document.querySelector('.card');

async function fetchdata() {
    const city = (String)(weathercity.value);
    if (city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f35c9c22a00657bd6cb657b86d17aa16`);
        if (response.ok) {
            getdata(response);
        }
        else {
            errordisplay("unable to fetch data!");
        }
    }
    else {
        errordisplay("enter city name first!");
    }
}
async function getdata(response) {
    const data = await response.json();
    console.log(data);
    weathercard(data);
}
function weathercard(data) {
    const name = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const id = data.weather[0].id;
    console.log(name, temp, humidity, description, id);

    card.textContent = "";

    const h1 = document.createElement('h1');
    h1.textContent = name;
    h1.classList.add("cityname");

    const p1 = document.createElement("p");
    p1.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    p1.classList.add("temp");

    const p2 = document.createElement("p");
    p2.textContent = `Humidity: ${humidity}`;
    p2.classList.add("humidity");

    const p3 = document.createElement("p");
    p3.textContent = getimage(id);
    p3.classList.add("image");

    const p4 = document.createElement("p");
    p4.textContent = description;
    p4.classList.add("weather")

    card.append(h1);
    card.append(p1);
    card.append(p2);
    card.append(p3);
    card.append(p4);
}
function getimage(id) {
    switch (true) {
        case (id >= 200 && id < 300):
            return '🌧️';
        case (id >= 300 && id < 400):
            return '🌧️';
        case (id >= 500 && id < 600):
            return '🌧️';
        case (id >= 600 && id < 700):
            return '❄️';
        case (id >= 700 && id < 800):
            return '🍃';
        case (id == 800):
            return '☀️';
        case (id > 800 && id < 810):
            return '💭';
    }
}
function errordisplay(err) {
    card.textContent = "";
    const p = document.createElement("p");
    p.textContent = err;
    p.style.fontWeight = 'bold'
    p.style.fontSize = '18px'
    card.append(p);
}

weatherform.addEventListener("submit", event => { event.preventDefault(); fetchdata() });