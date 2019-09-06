import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Action from './Action';

const ActionContainer = () => {

    const [actions, setActions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/actions')
            .then(res => {
                setActions(res.data);
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    return (
        <>
            actions.map(item => (
                <NavLink to="/actions/`${action.id}`">
                    <Action info={actions}/>
                </NavLink>
            ))
            ActionContainer
            <Route exact path="/actions/:id" render={props => <Action {...props} info={actions} />} />
        </>
    )
}

export default ActionContainer;