import 'date-fns';
import React from 'react';

import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker(props) {
    const { title, onChange, type, date } = props

    const [selectedDate, setSelectedDate] = React.useState(date);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onChange(type, date)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label={title}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

DatePicker.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}