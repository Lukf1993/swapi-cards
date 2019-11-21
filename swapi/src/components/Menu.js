import React from 'react';

const Menu = props => {

    const loadPage = props.loadPage;
    
    return(
        <div className='menu'>
            <span onClick={() => loadPage(true)} className='menu__button'>Pokaż ulubione</span>
            <span onClick={() => loadPage(false)} className='menu__button'>Wszystkie Karty</span>
        </div>
    )
}

export default Menu;