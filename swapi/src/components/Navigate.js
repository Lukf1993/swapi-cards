import React from 'react';

const Navigate = props => {

    const onClick = props.onClick;
    const page = props.page;

    return(
            <>
            <div className='menu'>
                <button onClick={() => onClick(page.previous)} className='menu__button'>Previous</button>
                <button onClick={() => onClick(page.next)} className='menu__button'>Next</button>
            </div>
            </>
    )
}

export default Navigate