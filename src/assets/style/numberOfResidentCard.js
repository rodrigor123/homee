/**
 * @providesModule NumberOfResidentCardStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    numbersGrid: {
        width:StyleConfig.getWidthByColumn()
    },
    numberButtonRow: {
        justifyContent:'space-between',
    },
    numberButtonText:{
        fontSize: StyleConfig.countPixelRatio(30),
        color: StyleConfig.navyDark
    },
});
