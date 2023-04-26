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

    const handleHide = () => {
        document.getElementById('weatherDiv').style.display = 'none';
        document.getElementById('weatherLogo').style.display = 'block';
    };

    return (
        <div onClick={handleHide}>
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

const borderColor = '#393646';
const backgroundColor = '#4f4557';
const highlight = '#f4eee0';
const mid = '#6d5d6e';

const customStyles = {
    fontFamily: 'Helvetica, sans-serif',
    gradientStart: { highlight },
    gradientMid: { backgroundColor },
    gradientEnd: { borderColor },
    locationFontColor: { highlight },
    todayTempFontColor: { highlight },
    todayDateFontColor: { highlight },
    todayRangeFontColor: { highlight },
    todayDescFontColor: { highlight },
    todayInfoFontColor: { highlight },
    todayIconColor: { borderColor },
    forecastBackgroundColor: { mid },
    forecastSeparatorColor: { highlight },
    forecastDateColor: { highlight },
    forecastDescColor: { highlight },
    forecastRangeColor: { highlight },
    forecastIconColor: { highlight },
};

export default ShowWeather;
