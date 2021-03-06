import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell/Cell';

const Column = ({column, play}) => {
    return (
        <tr>
            {column.map((cell, i) => {
                return <Cell key={i} value={cell} columnIndex={i} play={play} />
            })}
        </tr>
    );
};

Column.propTypes = {
    row: PropTypes.number,
    play: PropTypes.func
};

export default Column;