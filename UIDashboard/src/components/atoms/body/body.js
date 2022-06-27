import React, { PropTypes } from 'react';

const Body = props => {
    return (
        <div className='h-4/5 w-[88vw] flex flex-row justify-center align-center'>
            {props.children}
        </div>
    );
};

export default Body;