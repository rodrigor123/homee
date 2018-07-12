import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import SplashStyle from 'SplashStyle';
import withUser from 'withUser';
import { getUser } from 'global';

class Splash extends Component {

    constructor(props) {
        super(props);
        this.onEnd = this.onEnd.bind(this);
    }

    componentDidMount(){
        this.onEnd();
    }

    async onEnd(data) {
        const { setUser } = this.props;
        const user = await getUser();
        setTimeout(async () => {
            if (user != null) {
                setUser(user);
                Actions.main();
            } else {
                Actions.mapHome();
            }
        },1000);
    }

    render () {
        return (
            <View style={SplashStyle.container}>
                <Video
                    source={require('../assets/videos/splash_consumer.mp4')}
                    style={[SplashStyle.fullScreen]}
                    rate={1.0}
                    volume={0.0}
                    muted={true}
                    paused={false}
                    resizeMode={'cover'}
                    // onEnd={this.onEnd}
                    repeat={false}
                />
            </View>
        );
    }
}

export default withUser(Splash);
