import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectContainer = () => {

    // const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(res => {
                console.log('res', res)
            })
            .catch(error => {
                console.log(error)
            })
    },[])

    return (
        <>
            ProjectContainer
        </>
    )
}

export default ProjectContainer;