import React from 'react';

import PropTypes from 'prop-types';

import '../style/Field.css';

const Field = ({ title, value, btn }) => {
    return (
        <div className="field">
            <h3>{title}</h3>
            {
                value ? (
                    <>
                        <h4>{value}</h4>
                        <button>{btn}</button>
                    </>
                ) : (
                    <button className='addNew'>
                        <span>+</span>
                        <span>Add New</span>
                    </button>
                )
            }
        </div>
    );
}

Field.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    btn: PropTypes.string
}

export default Field;