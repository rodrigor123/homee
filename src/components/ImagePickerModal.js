import { Alert } from 'react-native';
import { IMAGECROP, IMAGE_CAMERA, IMAGE_PICKER} from 'global';
import ImagePicker from 'react-native-image-crop-picker';

_onPhotoSelect = (option, multiple = false) => {
    return new Promise(resolve => {
        if (option) {
            (multiple) ? (
                ImagePicker.openCamera(IMAGE_CAMERA).then(image => {
                    let images = image;
                    setTimeout(function () {
                        resolve(images);
                    },200);
                }).catch(error => {
                })

            ):(
                ImagePicker.openCamera(IMAGECROP).then(({path: uri, filename}) => {
                    resolve({uri, filename});
                }).catch(error => {
                })
            )

        } else {
            (multiple) ?(
                ImagePicker.openPicker(IMAGE_PICKER).then((images => {
                    resolve(images);
                })).catch(error => {
                })
            ) :(
                ImagePicker.openPicker(IMAGECROP).then(({path: uri, filename}) => {
                    resolve({uri, filename});
                }).catch(error => {
                })
            )
        }
    })
}

export default ImagePickerModal = (multiple = false) => {
    return new Promise(resolve => {
        Alert.alert(
            'Photos',
            'Please let us access your camera to add your profile picture.',
            [
                {text: 'Select from Gallery', onPress: () =>  resolve(_onPhotoSelect(0,multiple))},
                {text: 'Take picture', onPress: () => resolve(_onPhotoSelect(1,multiple))},
                {text: 'Cancel'},
            ],
            { cancelable: false }
        );
    });
}
