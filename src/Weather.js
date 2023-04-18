import React from 'react';
import ReactWeather, { useVisualCrossing } from 'react-open-weather';

function ShowWeather() {
    const { data } = useVisualCrossing({
        key: 'W8KUDHKPGT97M5GTAUTA4SBRS', //unsafe!!! put in env file
        lat: '52.4899',
        lon: '13.3532',
        lang: 'en',
        unit: 'metric', // values are (M,S,I)
    });

    return (
        <div>
            <ReactWeather
                theme={customStyles}
                data={data}
                locationLabel="Berlin"
                unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
                showForecast={false}
            />
        </div>
    );
}

const borderColor = '#35393c';
const backgroundColor = '#42858c';

const customStyles = {
    fontFamily: 'Helvetica, sans-serif',
    gradientStart: { backgroundColor },
    gradientMid: { backgroundColor },
    gradientEnd: { borderColor },
    locationFontColor: { borderColor },
    todayTempFontColor: { borderColor },
    todayDateFontColor: 'black',
    todayRangeFontColor: 'black',
    todayDescFontColor: { borderColor },
    todayInfoFontColor: { borderColor },
    todayIconColor: { borderColor },
    forecastBackgroundColor: '#FFF',
    forecastSeparatorColor: '#DDD',
    forecastDateColor: '#777',
    forecastDescColor: '#777',
    forecastRangeColor: '#777',
    forecastIconColor: '#4BC4F7',
};

export default ShowWeather;
