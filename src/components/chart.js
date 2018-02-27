import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {
    return _.round(_.sum(data)/data.length);
};

export default (props) => {
    return (
        <div>
            <div>
                <Sparklines data={props.data} height={100} width={150}>
                    <SparklinesLine color={props.color}/>
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
            </div>
            <div className="bg-info">
                <text>
                    {average(props.data)} {props.units}
                </text>
            </div>
        </div>
    );
}