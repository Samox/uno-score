import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class HistoricGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
          historic: [],
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.setState({historic: nextProps.historic})
        this.forceUpdate()
        return true
    }

    render () {
        var historic = []
        if (this.props.historic) {
            historic = this.props.historic
        }
        console.log('render', historic)
        return ( 
            <LineChart width={600} height={300} data={historic} key={Math.random()}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip itemSorter={(item1, item2)=> item2.payload[item2.dataKey] - item1.payload[item1.dataKey]}/>
                <Legend />
                <Line type="monotone" dataKey="Wadidou" stroke="#0a0011" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="Irene" stroke="#efe700" />
                <Line type="monotone" dataKey="BBChat" stroke="#37bfe5" />
                <Line type="monotone" dataKey="Cheche" stroke="#ef00d7" />
                <Line type="monotone" dataKey="Zig" stroke="#ef0000" />
                <Line type="monotone" dataKey="Clara" stroke="#a32ef2" />
                <Line type="monotone" dataKey="Sammy" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

export default HistoricGraph;