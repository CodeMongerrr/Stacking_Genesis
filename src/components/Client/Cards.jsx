import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

const Cards = ({ width, height, title, titleFontSize, content, contentFontSize }) => {
    const cardStyle = {
        width: width,
        height: height,
    };

    const titleStyle = {
        fontSize: titleFontSize,
    };

    const contentStyle = {
        fontSize: contentFontSize,
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="content">
                <h2 style={titleStyle}>{title}</h2>
                <p style={contentStyle}>{content}</p>
            </div>
        </div>
    );
};

Cards.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleFontSize: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    contentFontSize: PropTypes.string.isRequired,
};

export default Cards;
