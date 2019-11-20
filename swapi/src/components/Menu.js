import React from 'react';

const Menu = props => {

    const loadPage = props.loadPage;
    
    return(
        <>
            <button onClick={() => loadPage(true)}>Pokaż ulubione</button>
            <button onClick={() => loadPage(false)}>Wszystkie Karty</button>
        </>
    )
}

export default Menu;