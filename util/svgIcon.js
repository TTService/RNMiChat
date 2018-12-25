/**
 * @Author: SinPingWu
 *
 * @Date: 2018-12-25 15:37
 *
 * @Email: SinPingWu@163.com
 *
 * @Brief:
 */

import React, { Component } from "react";
import Svg, {
    Path
} from 'react-native-svg';

import PropTypes from 'prop-types';

export class Crown extends Component {
    static defaultProps = {
        color: "#ff0",
        stroke: "#f00",
        strokeWidth: 10,
        width: 25,
        height: 30
    };

    static propTypes = {
        color: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return(

            <Svg width={this.props.width} height={this.props.height} viewBox="0 0 1280 1024">
                <Path
                    d="M1056 896H224c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32h832c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32z m128-640c-53 0-96 43-96 96 0 14.2 3.2 27.4 8.8 39.6L952 478.4c-30.8 18.4-70.6 8-88.4-23.2L700.6 170C722 152.4 736 126 736 96c0-53-43-96-96-96s-96 43-96 96c0 30 14 56.4 35.4 74l-163 285.2c-17.8 31.2-57.8 41.6-88.4 23.2l-144.6-86.8c5.4-12 8.8-25.4 8.8-39.6 0-53-43-96-96-96S0 299 0 352s43 96 96 96c5.2 0 10.4-0.8 15.4-1.6L256 832h768l144.6-385.6c5 0.8 10.2 1.6 15.4 1.6 53 0 96-43 96-96s-43-96-96-96z"
                    fill={this.props.color}
                    stroke={this.props.stroke}
                    strokeWidth={this.props.strokeWidth}
                />
            </Svg>
        );
    }
}


