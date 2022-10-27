import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Theme = () => {

    const [mode, setmode] = useState('Day');

    const changeName = () => {

        let value = mode;
        if (value === "Day") {
            setmode('Nignt')
        }
        else {
            setmode('Day')
        }


    }

    return (
        <div className='App mt-5'>
            <h1>{mode}</h1>
            <Button onClick={changeName} variant="outline-success">Toggle mode</Button>
        </div>
    );
};

export default Theme;