/* Global Variables */
const apiURL = "http://api.openweathermap.org/data/2.5/weather?zip="
const apiKEY = "f01a0985105d21523c12579c94f4314e"
const elemOfGenerateBtn = document.getElementById('generate');
const countryCode = "us"


// Create a new date instance dynamically with JS
let d = new Date();
let date = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


const getWeatherInfo = async function(url) {
    let res = await fetch(url);
    try {
        let newData = await res.json();
        console.log(newData);
        return newData;
    } catch (err) {
        console.log(err)
    }
}

const generateHandler = async function() {
    const elemOfZip = document.getElementById('zip').value;
    const url = `${apiURL}${elemOfZip},${countryCode}&appid=${apiKEY}&units=metric`;

    if (zip.length === 0 || feelings.length === 0) {
        alert("Please fill up all values !");
        return
    }

    let weatherData = await getWeatherInfo(url);
    let temp = weatherData.main.temp;

    const updatedData = {
        date: date,
        temp: temp,
        content: content,
    }

    await saveData("http://localhost:3000/addData", updatedData);

    //Update UI
    updateUI();
}
async function saveData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
const contentUpdate = function() {
    const content = document.getElementById('feelings').value;
    const elemOfContent = document.getElementById('content');
    elemOfContent.innerHTML = content;
}

const updateUI = async() => {

    const elemOfDate = document.getElementById('date');
    const elemOfTemp = document.getElementById('temp');
    let uiData = await getData("http://localhost:3000/addData");
    //Updating the UI
    elemOfDate.innerHTML = uiData.date;
    elemOfTemp.innerHTML = uiData.temp;

    contentUpdate();
};


const getData = async function(url) {
    let res = await fetch(url)
    try {
        let data = res.json();
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
    }

}

elemOfGenerateBtn.addEventListener('click', generateHandler);