import React, { useState, useEffect } from 'react';

const Action = (props) => {

    const { info } = props;

    return (
        <>
            Action
            <p>{info.description}</p>
            <p>{info.notes}</p>
        </>
    )
}

export default Action;