import React, { useState, useEffect } from 'react';

const Project = (props) => {

    const { info } = props;

    return (
        <>
            Project
            <p>{info.name}</p>
            <p>{info.description}</p>
        </>
    )
}

export default Project;