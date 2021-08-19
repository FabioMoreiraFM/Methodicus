import 'date-fns';
import React from 'react';
import { Component } from 'react';

import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class DatePicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDate: this.props.date
        }
    }

    handleDateChange = (date) => {
        const { onChange, type } = this.props

        this.setState({ selectedDate: date });
        onChange(type, date)
    };

    render() {
        const { title } = this.props
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={title}
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        );
    }
}

export default DatePicker

DatePicker.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}