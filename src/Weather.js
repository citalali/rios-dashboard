import React from 'react';
import ReactWeather, { useVisualCrossing } from 'react-open-weather';

function ShowWeather() {
    const { data } = useVisualCrossing({
        key: 'W8KUDHKPGT97M5GTAUTA4SBRS',
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

const customStyles = {
    fontFamily: 'Helvetica, sans-serif',
    gradientStart: 'pink',
    gradientMid: 'pink',
    gradientEnd: 'deeppink',
    locationFontColor: 'deeppink',
    todayTempFontColor: 'deeppink',
    todayDateFontColor: 'black',
    todayDateFontSize: '0px',
    todayRangeFontColor: 'black',
    todayDescFontColor: 'deeppink',
    todayInfoFontColor: 'deeppink',
    todayIconColor: 'deeppink',
    forecastBackgroundColor: '#FFF',
    forecastSeparatorColor: '#DDD',
    forecastDateColor: '#777',
    forecastDescColor: '#777',
    forecastRangeColor: '#777',
    forecastIconColor: '#4BC4F7',
};

export default ShowWeather;
