import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import PropertySettings from 'PropertySettings';
import ManagingStyle from 'ManagingStyle';

class Managing extends Component {

    render(){
        return(
            <Content>
                <Grid style={ManagingStyle.grid1}>
                    <Row style={ManagingStyle.grid1Row}>
                        <Col style={ManagingStyle.grid1Col}>
                            <Row style={ManagingStyle.defaultLabelRow}>
                                <Col style={ManagingStyle.defaultLabelCol}>
                                    <Label style={ManagingStyle.defaultLabel}>DEFAULT SETTINGS</Label>
                                </Col>
                            </Row>
                            <Row style={ManagingStyle.defaultLabelDescRow}>
                                <Col style={ManagingStyle.defaultLabelDescCol}>
                                    <Label style={ManagingStyle.defaultLabelDesc}>
                                        The following steps will act as default  settings for future properties.
                                        These settings can be adjustable for each property.
                                    </Label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <PropertySettings />
            </Content>
        )
    }
}

export default Managing;
