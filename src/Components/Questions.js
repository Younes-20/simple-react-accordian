import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go';
import { TiMinus } from 'react-icons/ti';

function Questions({ info, title }) {

    const [showInfo, setShowInfo] = useState(false);
    return (

        <article>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <TiMinus /> : <GoPlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>

    )
}

export default Questions
