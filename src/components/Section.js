import React from 'react';

import PropTypes from 'prop-types';

import downArrowImage from '../images/down-arrow.png';

import '../style/Section.css';

const Section = ({ title, subtitle, image, btnLeft, btnRight, hasDownArrow }) => {
    const moveDown = () => {
        window.scrollBy(0, window.innerHeight);
    }

    return (
        <div className="section" style={{backgroundImage: `url(${image})`}}>
            <div className="section__content">
                <div className="section__header">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <div className="section__footer">
                    <div className="section__btnContainer">
                        <button className="section__btn section__btnLeft">{btnLeft}</button>
                        {
                            btnRight && <button className="section__btn section__btnRight">{btnRight}</button>
                        }
                    </div>
                </div>
            </div>
            {
                hasDownArrow && <div className="section__downArrow" onClick={moveDown}><img src={downArrowImage} alt="See More" /></div>
            }
        </div>
    );
}

Section.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle',
    image: '',
    btnLeft: 'Custom Order',
    btnRight: '',
    hasDownArrow: false
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    btnLeft: PropTypes.string.isRequired,
    btnRight: PropTypes.string,
    hasDownArrow: PropTypes.bool
}

export default Section;