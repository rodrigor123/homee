/**
 * @providesModule Swiper
 */

import React, { Component } from 'react';
import { SwipeRow } from 'native-base';

class Swiper extends Component {

    render() {
        const { body, style, right } = this.props;
        return(
            <SwipeRow
                disableRightSwipe={true}
                style={style}
                rightOpenValue={-75}
                body={body}
                right={right}
            />
        )
    }
}

export default Swiper;
