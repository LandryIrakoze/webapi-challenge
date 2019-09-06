import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Project from './Project';

const ProjectContainer = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(res => {
                setProjects(res.data);
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    return (
        <>
            projects.map(item => (
                <NavLink to="/projects/`${projects.id}`">
                    <Project info={projects}/>
                </NavLink>
            ))
            ProjectContainer
            <Route exact path="/projects/:id" render={props => <Project {...props} info={projects} />} />
        </>
    )
}

export default ProjectContainer;