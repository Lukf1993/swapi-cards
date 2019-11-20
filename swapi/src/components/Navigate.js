import React from 'react';

const Navigate = props => {

    const onClick = props.onClick;
    const page = props.page;

    return(
            <>
                <button onClick={() => onClick(page.previous)}>Previous</button>
                <button onClick={() => onClick(page.next)}>Next</button>
            </>
    )
}

export default Navigate