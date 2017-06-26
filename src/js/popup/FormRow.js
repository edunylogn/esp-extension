import React from 'react';
import PropTypes from 'prop-types';

const FormRow = (props) => {
    let defaultClass = 'callout';
    defaultClass += props.done ? ' callout-success' : ' callout-info';

    return (
        <div className={defaultClass}>
            <i className='ficon ficon-checkmark mark-done' onClick={props.onClickDone}></i>
            <span>{props.value}</span>
            <i className='close' onClick={props.onClickClose}>&times;</i>
        </div>
    );
};

FormRow.propTypes = {
    done: PropTypes.bool,
    value: PropTypes.string,
    onClickDone: PropTypes.func,
    onClickClose: PropTypes.func
};

export default FormRow;
