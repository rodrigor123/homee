/**
 * @providesModule MainContainer
 */

import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import withUser from 'withUser';
import withLoader from 'withLoader';
import { getUser } from 'global';
import LayoutStyle from 'LayoutStyle';
import Toast from 'Toast';
import withGrid from 'withGrid';
import Loader from 'Loader';
import GridView from 'GridView';
import NotificationBar from 'NotificationBar';
class MainContainer extends Component {
    constructor() {
        super();
        //Disable yellow warning message
        console.disableYellowBox = true;
    }

    componentWillReceiveProps(nextProps) {
    }

    async componentWillMount() {
        const { grid, gridSet } = this.props;
        const { setUser } = this.props;
        setUser(await getUser());
    }

    _handelGrid = () => {
        const { grid, gridSet } = this.props;
        gridSet(!grid);
    }

    render() {
        const { loaderState, grid } = this.props;
        return (
            <TouchableWithoutFeedback onLongPress={this._handelGrid.bind(this)}>

                <View style={((loaderState || grid)) ? LayoutStyle.mainContainerWithLoader : LayoutStyle.mainContainer}>
                    {
                        grid && <GridView />
                    }

                    <Loader />
                    <Toast />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default withGrid(withUser(withLoader(MainContainer)));
