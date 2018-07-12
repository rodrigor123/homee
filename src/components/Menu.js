/**
 * @providesModule Menu
 */


import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Grid, Row, Col, Thumbnail, Label, Spinner } from 'native-base';
import MenuStyle from 'MenuStyle';
import { userLogout, IMAGE_BASE_URL } from 'global';
import withUser from 'withUser';
import StyleConfig from 'StyleConfig';
import LayoutStyle from 'LayoutStyle';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            thumbnailRadiusStyle:null,
            profileImage:{uri: IMAGE_BASE_URL+'/'+this.props.user.id, cache: 'force-cache'}
        }
    }

    componentWillReceiveProps(nextProps){
        $this = this;
        const { user } = nextProps;
        const { setUser } = this.props;
        if(user.imageChanged) {
            $this.setState({
                profileImage:{uri: IMAGE_BASE_URL+'/'+user.id, cache: 'reload'}
            });
            setUser(Object.assign(user, {imageChanged: false}));
            setTimeout(() => {
                $this.setState({
                    profileImage:{uri: IMAGE_BASE_URL+'/'+this.props.user.id, cache: 'force-cache'},
                });
            }, 2000)
        }
    }

    _onPressIn = () => {
        this.setState({
            thumbnailRadiusStyle:{
                borderWidth: 10,
                borderColor:StyleConfig.blue,
            }
        })
    }

    _onPressOut = () => {
        this.setState({
            thumbnailRadiusStyle:null
        })
    }

    render(){
        const { thumbnailRadiusStyle, profileImage } = this.state;
        return(
            <Content>
                <Grid style={MenuStyle.grid1}>
                    <Row style={MenuStyle.grid1Row}>
                        <Col style={MenuStyle.grid1Col}>
                            <Row style={MenuStyle.profileRow}>
                                <Col style={MenuStyle.profileCol}>
                                    <TouchableWithoutFeedback
                                        onPress={()=>{Actions.viewProfile()}} onPressIn={()=> this._onPressIn()} onPressOut={()=> this._onPressOut()}>
                                        <Thumbnail source={profileImage} style={[MenuStyle.profile, thumbnailRadiusStyle]} />
                                    </TouchableWithoutFeedback>
                                </Col>
                            </Row>
                            <Row style={MenuStyle.logoutBtnRow}>
                                <Col style={MenuStyle.logoutBtnCol}>
                                    <TouchableOpacity style={MenuStyle.logoutBtn} onPress={() => userLogout()}>
                                        <Text style={MenuStyle.logoutBtnTxt}>LOG OUT</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <Grid style={MenuStyle.grid2}>
                    <Row style={MenuStyle.grid2Row}>
                        <Col style={MenuStyle.grid2Col}>
                            <Row style={MenuStyle.menuItemRow}>
                                <Col style={MenuStyle.menuItemCol}>
                                    <TouchableOpacity onPress={() => Actions.home()}>
                                        <Label style={MenuStyle.menuItem}>
                                            HOME
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={MenuStyle.menuItemRow}>
                                <Col style={MenuStyle.menuItemCol}>
                                    <TouchableOpacity>
                                        <Label style={MenuStyle.menuItem}>
                                            JOB HISTORY
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={MenuStyle.menuItemRow}>
                                <Col style={MenuStyle.menuItemCol}>
                                    <TouchableOpacity>
                                        <Label style={MenuStyle.menuItem}>
                                            ABOUT
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={MenuStyle.updateTxtRow}>
                                <Col style={MenuStyle.updateTxtCol}>
                                    <Label style={MenuStyle.updateTxt}>
                                        Version 1.28 ios
                                    </Label>
                                </Col>
                            </Row>
                            <Row style={MenuStyle.updateBtnRow}>
                                <Col style={MenuStyle.updateBtnCol}>
                                    <TouchableOpacity style={MenuStyle.updateBtn}>
                                        <Text style={MenuStyle.updateBtnTxt}>
                                            UP TO DATE
                                        </Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }
}

export default withUser(Menu);
