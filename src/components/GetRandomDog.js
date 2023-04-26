import React, { useState, useEffect } from 'react';

const GetRandomDog = () => {
    const [dogImageUrl, setDogImageUrl] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => setDogImageUrl(data.message))
            .catch((error) => console.log(error));
    }, []);
    const handleHide = () => {
        document.getElementById('dogDiv').style.display = 'none';
        document.getElementById('dogLogo').style.display = 'block';
    };
    return (
        <div>
            <img src={dogImageUrl} alt="random dog" onClick={handleHide} id="dogPictureId" />
        </div>
    );
};

export default GetRandomDog;
