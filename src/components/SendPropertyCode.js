/**
 * @providesModule SendPropertyCode
 */

import { Alert } from 'react-native';
import { email, text } from 'react-native-communications';

_onTextMessage = ({code, first_name, last_name, address}) => {
    text(null, `Your property manager, ${first_name} ${last_name}, would like to add you as a resident to "${address}" on Homee. Use the following code registering or adding a property in your profile: ${code} 
    
Download Homee now 
Apple Store: https://itunes.apple.com/us/app/homee-on-demand/id1078799795?mt=8
Google Play: https://play.google.com/store/apps/details?id=homee.consumer.droid&hl=en`);
}

_onEmail = ({code, first_name, last_name, address}) => {
    email(null, null, null, 'Property Code',`Hello [Name],
    Your property manager, ${first_name} ${last_name}, would like to add you as a resident to "${address}" on Homee. Use the following code registering or adding a property in your profile: ${code} 
    
Download Homee now 
Apple Store: https://itunes.apple.com/us/app/homee-on-demand/id1078799795?mt=8
Google Play: https://play.google.com/store/apps/details?id=homee.consumer.droid&hl=en` )
}

export default SendPropertyCode = ({title, intro, code, first_name, last_name , address}) => {
    return new Promise(resolve => {
        Alert.alert(
            (typeof title != 'undefined') ? title : 'Send Property Code',
            (typeof intro != 'undefined') ? intro : 'How would you like to send the property code?',
            [
                {text: 'Text Message', onPress: () => resolve(_onTextMessage({code, first_name, last_name, address}))},
                {text: 'Email', onPress: () => resolve(_onEmail({code, first_name, last_name, address}))},
                {text: 'Cancel'},
            ],
            { cancelable: false }
        )
    });
}

