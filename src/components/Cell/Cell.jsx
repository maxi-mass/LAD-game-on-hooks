import React from 'react';
import PropTypes from 'prop-types';
import cellStyles from './Cell.module.css';

const Cell = ({ value, columnIndex, play }) => {
    let color = 'white';
    if (value === 1) {
        color = 'red';
    } else if (value === 2) {
        color = 'yellow';
    }

    return (
        <td>
            <div className={cellStyles.field} onClick={() => {play(columnIndex)}}>
                <div className={cellStyles[color]} />
            </div>
        </td>
    );
};

Cell.propTypes = {
    value: PropTypes.number,
    columnIndex: PropTypes.number,
    play: PropTypes.func
};

export default Cell;