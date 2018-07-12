/**
 * @providesModule NotificationBar
 */


import  React, { Component } from 'react';
import { View } from 'react-native';
import { Row, Col, Label } from 'native-base';
import NotificationBarStyle from 'NotificationBarStyle';

class NotificationBar extends Component{

    render(){
        return(
            <View style={NotificationBarStyle.notificationBarRow}>
                <Row>
                    <Col style={NotificationBarStyle.notificationBarCol}>
                        <Row style={[NotificationBarStyle.notificationBarRowLabel]}>
                            <Col style={NotificationBarStyle.notificationBarColLabel}>
                                <Label style={[NotificationBarStyle.notificationBarLabel]}></Label>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </View>
        )
    }

}

export default NotificationBar;
