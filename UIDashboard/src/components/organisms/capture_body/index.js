import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles.css'

const CaptureBody = props => {
    return (
        <div className='body'>
            <div className="container mx-auto px-10 py-5 rounded shadow bg-white-900 text-black">Hello world</div>
        </div>
    );
};

CaptureBody.propTypes = {
    
};

export default CaptureBody;