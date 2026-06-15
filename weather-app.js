async function getWeather(city) {
    try{
        const response = await fetch(
        `https://wttr.in/${city}?format=j1`
        );

        const data = await response.json();

        const temp = data.current_condition[0].temp_C;
        const feelsLike = data.current_condition[0].FeelsLikeC;
        const humidity = data.current_condition[0].humidity;
        const cloudCover = data.current_condition[0].cloudcover;
        const windSpeed = data.current_condition[0].windspeedKmph;

        console.log("===== Weather =====\n");
        console.log(` City: ${city}`);
        console.log(` Temperature: ${temp}°C`);
        console.log(` Feels Like: ${feelsLike}°C`);
        console.log(` Humidity: ${humidity}%`);
        console.log(` Cloud Cover: ${cloudCover}%`);
        console.log(` Wind Speed: ${windSpeed}kmph\n`);
        console.log("==================");
    }

    catch (error){
        console.log("Could not fetch weather data.");
        console.log(error.message);
    }
}

getWeather("Indore");