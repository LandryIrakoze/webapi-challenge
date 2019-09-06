import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActionContainer = () => {

    // const [actions, setActions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/actions')
            .then(res => {
                console.log('res', res)
            })
            .catch(error => {
                console.log(error)
            })
    },[])

    return (
        <>
            ActionContainer
        </>
    )
}

export default ActionContainer;