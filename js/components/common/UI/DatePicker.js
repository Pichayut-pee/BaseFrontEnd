import 'date-fns';
import React from 'react';
import { DatePicker as BaseDatePicker } from 'antd';
import 'antd/dist/antd.css';



export default function DatePicker() {


    return (
        <div className="datepicker">

                <BaseDatePicker onChange={e => console.log('e', e)} />
        </div>

    );
}