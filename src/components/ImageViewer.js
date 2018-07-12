/**
 * @providesModule ImageViewer
 */

import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import { Content } from 'native-base';
import ImageViewerStyle from 'ImageViewerStyle';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import StyleConfig from 'StyleConfig';
import Orientation from 'react-native-orientation';

class ImageViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRotate:false,
        };
    }

    componentWillReceiveProps(nextProps) {
        const { isOpen } = nextProps;
        if (isOpen) {
            Orientation.unlockAllOrientations();
            Orientation.addOrientationListener(this._orientationDidChange);
        } else {
            Orientation.lockToPortrait();
        }
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
        // Remember to remove listener
        Orientation.removeOrientationListener(this._orientationDidChange);
    }

    _orientationDidChange = (orientation) => {
        this.setState({isRotate:orientation != 'PORTRAIT'});
        this.forceUpdate();
    }

    render () {
        const { images = [], isOpen, onClose, imageBaseUrl, filedName } = this.props;
        const { isRotate } = this.state;
        return (
            <Modal
                backdropColor="transparent"
                animationType={"slide"}
                transparent={true}
                supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                isVisible={isOpen}
                style={ImageViewerStyle.modalRotate}
            >
                <Content style={[ImageViewerStyle.container]} >

                    <TouchableOpacity onPress={() => onClose()} style={ImageViewerStyle.closeButton}>
                        <IconEvil name="close" style={ImageViewerStyle.closeIcon}/>
                    </TouchableOpacity>

                    <Swiper key={'image-'+new Date().toISOString()}
                            style={(isRotate) ? ImageViewerStyle.swiperRotate : ImageViewerStyle.swiper}
                            dotColor={StyleConfig.whiteFullLight}
                            activeDotColor={StyleConfig.whiteMediumLight}
                            nextButton={
                                <IconAwesome name="angle-right" style={ImageViewerStyle.nextIcon} />
                            }
                            prevButton={
                                <IconAwesome name="angle-left" style={ImageViewerStyle.prevIcon} />
                            }
                            showsButtons={true}>

                        {
                            images.map((image,iKey) => (
                                <View style={[ImageViewerStyle.sliderView,(isRotate) ? ImageViewerStyle.sizeRotate : ImageViewerStyle.size]} key={iKey}>
                                    <Image style={(isRotate) ? ImageViewerStyle.sliderImageRotate : ImageViewerStyle.sliderImage}
                                           source={(imageBaseUrl) ? {uri:imageBaseUrl+image[filedName]} : image} />
                                </View>
                            ))
                        }
                    </Swiper>
                </Content>
            </Modal>
        );
    }
}

export default ImageViewer;
