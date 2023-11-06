import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import Button from '../Button';

const CardX = ({ width, height, title, titleFontSize, content, contentFontSize, buttonFunction, buttonText, parameter, buttonMargin}) => {
    const cardStyle = {
        width: width,
        height: height,
    };

    const titleStyle = {
        fontSize: titleFontSize,
    };

    const contentStyle = {
        fontSize: contentFontSize,
        display : "flex",
        float: "left",
        marginRight: buttonMargin
    };
    const button = {
        float: "right"
    }
    const handleFunction = async() =>{
        buttonFunction(parameter);
    }
    return (
        <div className="card" style={cardStyle}>
            <div className="content">
                <h2 style={titleStyle}>{title}</h2>
                <p style={contentStyle}>{content}</p>
                <div style={button} onClick={handleFunction}>
                    <Button buttonText={buttonText}/>
                </div>

            </div>
        </div>
    );
};

CardX.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleFontSize: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    contentFontSize: PropTypes.string.isRequired,
};

export default CardX;
