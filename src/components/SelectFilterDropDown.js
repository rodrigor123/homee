/**
 * @providesModule SelectFilterDropDown
 */

import React, { Component } from 'react';
import { ListView, View, TouchableOpacity } from 'react-native';
import { Card, Container, Content, Grid, Row, Col, Text } from 'native-base';
import StyleConfig from 'StyleConfig';
import ResidentCard from 'ResidentCard';
import SelectFilterDropDownStyle from 'SelectFilterDropDownStyle';
import ReduxField from 'ReduxField';
import { reduxForm, change } from 'redux-form';
import IconEntypo from 'react-native-vector-icons/Entypo';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SelectFilterDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.listData),
            showList:false
        };
    }

    _renderComponent = (rowData) => {
        const { first_name, last_name, mobile, unit } = rowData;
        return (
            <ResidentCard _onPress={() => {this._selectItem(rowData)}} residentData={{first_name, last_name, mobile, unit }} />
        )
    }

    _onSearch = (data) => {
        const { listData, filterWith } = this.props;
        if(!this.state.showList) {
            this.setState({
                showList: true,
            });
        }
        let tempData = [];
        listData.map((value, key) => {
            filterWith.map((filedName, key) => {
                if(value[filedName].search(data) != -1){
                    tempData.push(value);
                }
            })

        });
        if(tempData.length) {
            this.setState({
                dataSource: ds.cloneWithRows(tempData)
            });
        } else {
            this.setState({
                showList: false,
            });
        }
    }

    _onFocus = () => {
        if(!this.state.showList) {
            this.setState({
                showList: true
            });
        }
    }

    _onBlur = () => {
        // if(this.state.showList) {
        //     this.setState({
        //         showList: false
        //     });
        // }
    }


    _selectItem = (data) => {
        const { mobile } = data;
        this.props.change('searchItem', mobile);
        this.setState({
            showList:false
        })
    }

    render(){
        const { showList } = this.state;
        return(
            <View >
                {
                    (showList)
                    ?
                        <Card style={[{width:StyleConfig.getWidthByColumn(), zIndex:99999999, position:'absolute', bottom:50, paddingVertical:StyleConfig.countPixelRatio(5)}]}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => this._renderComponent(rowData)}
                            />
                        </Card>
                    :
                        null
                }
                <ReduxField
                    name="searchItem"
                    placeholder="Select or enter phone #"
                    label={"Resident"}
                    style={SelectFilterDropDownStyle.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(value) => this._onSearch(value)}
                    _onFocus={() => {this._onFocus()}}
                    _onBlur={() => {this._onBlur()}}
                    rightIcon={
                        (showList)
                            ?
                                <IconEntypo name="chevron-thin-up" style={SelectFilterDropDownStyle.searchItemIcon} />
                            :
                                <IconEntypo name="chevron-thin-down" style={SelectFilterDropDownStyle.searchItemIcon} />
                    }
                />
            </View>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.searchItem = !values.searchItem
        ? 'Resident'
        : undefined;
}

const initialValues = {
    searchItem:'',
};

const withForm = reduxForm({
    form: 'searchFrom',
    validate,
    initialValues
});


export default withForm(SelectFilterDropDown);
