import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ListView } from 'react-native';
import { Content, Label, Grid, Row, Col, Text } from 'native-base';
import OwnerResidentStyle from 'OwnerResidentStyle';
import LayoutStyle from 'LayoutStyle';
import ReduxField from 'ReduxField';
import StyleConfig from 'StyleConfig';
import { reduxForm, Field, change } from 'redux-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { GOOGLE_API_KEY, API_BASE_URL, HOUSE_RESIDENT, MANAGING } from 'global';
import { Actions } from 'react-native-router-flux';
import API from 'AppUtils';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withProperty from 'withProperty';
import SearchAddress from 'SearchAddress';
import ResidentAddPropertyFieldForm from 'ResidentAddPropertyFieldForm';
import NumberOfResidentCard from 'NumberOfResidentCard';
import PropertySettings from 'PropertySettings';
import PropertyProfileCard from 'PropertyProfileCard';

let myComponent = null;
class OwnerResident extends Component{

    constructor(props){
        super(props);
        this.state = {
            image: null,
            updateImage:false,
            btnDisable:false,
            btnCodeDisable:false,
            addressError:false,
            addressData:'',
            photoBtn:{
                Txt:"ADD PROPERTY PHOTO",
                disabled: true
            },
            propTypeBtns:Object.keys(StyleConfig.propertyTypes).map((key) => { return StyleConfig.propertyTypes[key] }),
            anyPropTypeSeleted:false,
            residentCount:0,
            updateSettings:false
        }
    }

    componentDidMount(){
        const { viewProperty } = this.props;
        if (viewProperty != null) {
            const viewData = (viewProperty.property) ? viewProperty.property : viewProperty;
            this.props.change('name', viewData.name);
            this.props.change('class', viewData.class);
            this.props.change('address', viewData.address);
            this.props.change('unit', viewProperty.unit);
            this.props.change('notes', viewProperty.notes);
            this.props.change('lat', viewData.lat);
            this.props.change('lng', viewData.lng);
            this.props.change('resident_count', viewData.resident_count);
            this._onPropType(viewData.class);
            this.setState({
                addressData:viewData.address,
                residentCount:viewData.resident_count
            });
            if(viewData.image_id != null) {
                this.setState({
                    image:{uri:API_BASE_URL+'/properties/'+viewData.id+'/image'},
                    photoBtn:{Txt:"EDIT PROPERTY PHOTO"},

                });
            }
        } else {
            //Set opacity style of Property class type.
            this._onPropType();
        }
    }

    _viewProperty = (data) => {
        const { setViewProperty } = this.props;
        API.getPropertiesDetails(data)
        .then((response) => {
            setViewProperty(response);
            Actions.viewPropertyDetails();
        });
    }

    _toggleModal = () => {
        ImagePickerModal()
        .then(({uri, filename})=>{
            this.setState({
                image:{uri, filename, name: filename},
                photoBtn:{Txt:"EDIT PROPERTY PHOTO"},
                updateImage:true
            });
        });
    }

    _onPropType = (btn) => {
        let propTypeBtns = this.state.propTypeBtns;
        let photoBtn = this.state.photoBtn;
        propTypeBtns.map((value, key) => {
            if(btn == value.class) {
                value.selected = 1;
                this.props.change('class', value.class);
                this.setState({
                    anyPropTypeSeleted: true
                });
                photoBtn.disabled = false;
            } else {
                value.selected = 2;
            }
        });
        this.setState({
            propTypeBtns,
            photoBtn
        });
    }

    _updateAddress = (data, details) => {
        const { formatted_address:address, geometry:{location}} = details;
        this.props.change('address', address);
        this.props.change('lat', location.lat);
        this.props.change('lng', location.lng);
        this.setState({
            addressData:address
        });
    }

    _saveProperty = (data) => {
        const { loader, addPropertyManaging } = this.props;
        this.setState({
            btnDisable: true
        });
        const { image } = this.state;
        setTimeout(() => { loader(true);}, 1);
        API.addProperties({'type':(addPropertyManaging) ? MANAGING : HOUSE_RESIDENT, ...data})
        .then((response) => {
            const { error, message } = response;
            if(!error) {
                const { property_id } = response;
                if(image != null) {
                    API.addPropertiesAvatar({property_id, image})
                        .then(({error, message}) => {
                            if (addPropertyManaging) {
                                this._savePropertySettingsById(property_id);
                            }
                            this._responseOfApi('Property saved');
                            this._viewProperty({property_id});
                        });
                } else {
                    if (addPropertyManaging) {
                        this._savePropertySettingsById(property_id);
                    }
                    this._responseOfApi('Property saved');
                    this._viewProperty({property_id});
                }
            } else {
                this._responseOfApi(message);
            }

        });
    }

    _savePropertySettingsById = (property_id) => {
        const { loader, propertySettings } = this.props;
        API.savePropertySettingsById({'data':propertySettings, property_id})
            .then((response) => {
            }).catch(()=>{
                loader(false);
            });
    }

    _updateProperty = (data) => {
        const { loader, viewProperty, addPropertyManaging } = this.props;
        const { image, updateImage } = this.state;

        this.setState({
            btnDisable: true
        });
        setTimeout(() => { loader(true);}, 1);
        let apidata = {
            data:{'type':(addPropertyManaging) ? MANAGING : HOUSE_RESIDENT, ...data},
            property_id: viewProperty.id
        };
        API.updateProperties(apidata)
            .then((response) => {
                const { error, message } = response;
                if(!error) {
                    const { id } = viewProperty;
                    if(updateImage != null) {
                        API.addPropertiesAvatar({'property_id':id, image})
                            .then(() => {
                                this._responseOfApi('Property updated');
                                this._viewProperty({'property_id':id});
                            });
                    } else {
                        this._responseOfApi('Property updated');
                        this._viewProperty({'property_id':id});
                    }
                } else {
                    this._responseOfApi(message);
                }
            });
    }

    _responseOfApi = (message) => {
        const { loader, toast } = this.props;
        loader(false);
        this.setState({
            btnDisable: false
        });
        toast({text:message, type:'success', navBar:true});
    }

    _onChangeNumber = (residentCount) => {
        this.props.change('resident_count', residentCount);
        this.setState({residentCount});
    }

    _updateResidentById = (data) => {
        this.setState({
            btnDisable: true
        });
        const { viewProperty:{ id }, loader } = this.props;
        setTimeout(()=>{loader(true);}, 1);
        API.updateResidentById({'data':data, 'id':id})
            .then((response) => {
                const { error } = response;
                if(!error) {
                    this._responseOfApi('Property updated');
                    this._getResidentById({id})
                } else {
                    this._responseOfApi();
                }
                loader(false);
            })
            .catch(() => {
                this._responseOfApi();
                loader(false);
            });
    }

    _getResidentById = (data) => {
        const { loader, setViewProperty } = this.props;
        setTimeout(()=>{loader(true);}, 1);
        API.getResident(data)
            .then((response) => {
                const { error } = response;
                if(!error) {
                    setViewProperty(response);
                    Actions.viewPropertyDetails();
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    render(){
        const { image, photoBtn:{Txt, disabled}, propTypeBtns, btnDisable, addressError, addressData, residentCount } = this.state;
        const { handleSubmit, invalid, viewProperty, addPropertyManaging } = this.props;
        let viewData = null;
        if(viewProperty != null) {
            if(viewProperty.property != undefined){
                viewData = viewProperty.property;
            }
        }
        return(
            <Content>
                { (viewProperty == null && !addPropertyManaging) ? <ResidentAddPropertyFieldForm/> : null }
                { (viewProperty != null && addPropertyManaging) ? <PropertySettings _updateSettings={btnDisable} /> : null }

                <Grid style={OwnerResidentStyle.grid2} >
                    <Row style={OwnerResidentStyle.grid2Row}>
                        <Col style={OwnerResidentStyle.grid2Col}>
                            { (viewData) ? <PropertyProfileCard hideNameAddress={1} editBtn={0} propertyData={viewData} /> : null}
                            {
                                (viewProperty != null && !addPropertyManaging)
                                ?
                                    <Row style={OwnerResidentStyle.editLabelRow}>
                                        <Col style={OwnerResidentStyle.editLabelCol}>
                                            {
                                                (viewData)
                                                ?
                                                    <Label style={OwnerResidentStyle.propDetailTxt}>Please review the
                                                        information input by your property manager and enter requested info.
                                                    </Label>
                                                :
                                                    <Label style={OwnerResidentStyle.editLabel}>Make changes to your property's
                                                        profile like updating its photo or features here.
                                                    </Label>
                                            }
                                        </Col>
                                    </Row>
                                :
                                    null
                            }
                            <Row style={OwnerResidentStyle.labelRow}>
                                <Col style={OwnerResidentStyle.labelCol}>
                                    <View style={[LayoutStyle.labelView, OwnerResidentStyle.labelViewTxt2]}>
                                        <Label style={LayoutStyle.labelViewTxt}>NAME & LOCATION</Label>
                                    </View>
                                </Col>
                            </Row>
                            {
                                (viewData)
                                ?
                                    <Row>
                                        <Col>
                                            <Row style={[OwnerResidentStyle.propertyNameRow]}>
                                                <ReduxField
                                                    disabled={true}
                                                    name="name"
                                                    placeholder="Type here"
                                                    placeholderTextColor={[StyleConfig.placeholderColor]}
                                                    label="Property Name"
                                                    style={[OwnerResidentStyle.input, OwnerResidentStyle.disabledFiled]}
                                                    labelInputStyle={OwnerResidentStyle.disabledFiled}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    info="(32 characters max)"
                                                    rightIcon={
                                                        <EntypoIcon name="lock" style={OwnerResidentStyle.lockIcon} />
                                                    }
                                                />
                                            </Row>
                                            <Row style={OwnerResidentStyle.addressRow}>
                                                <ReduxField
                                                    disabled={true}
                                                    name="address"
                                                    placeholder="Type here"
                                                    placeholderTextColor={StyleConfig.placeholderColor}
                                                    label="Address"
                                                    style={[OwnerResidentStyle.input, OwnerResidentStyle.disabledFiled]}
                                                    labelInputStyle={OwnerResidentStyle.disabledFiled}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    rightIcon={
                                                        <EntypoIcon name="lock" style={OwnerResidentStyle.lockIcon} />
                                                    }
                                                />
                                            </Row>
                                        </Col>
                                    </Row>
                                :
                                    <Row>
                                        <Col>
                                            <Row style={[OwnerResidentStyle.propertyNameRow]}>
                                                <ReduxField
                                                    name="name"
                                                    placeholder="Type here"
                                                    placeholderTextColor={StyleConfig.placeholderColor}
                                                    label="Property Name"
                                                    style={OwnerResidentStyle.input}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    maxLength={32}
                                                    info="(32 characters max)"
                                                    showSideError={true}
                                                    sideErrorInputStyle={OwnerResidentStyle.formInputError}
                                                />
                                            </Row>
                                            <Row style={OwnerResidentStyle.addressRow}>
                                                <Col>
                                                    <SearchAddress
                                                        disableTypeEvent={1}
                                                        inputLabel="Address"
                                                        onSelect={this._updateAddress.bind(this)}
                                                        addressData={addressData}
                                                        isError={addressError}
                                                        error="Field Required"
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                            }

                            {
                                (!addPropertyManaging)
                                ?
                                    <Row style={OwnerResidentStyle.unitRow}>
                                        <ReduxField
                                            name="unit"
                                            placeholder="Type here"
                                            placeholderTextColor={StyleConfig.placeholderColor}
                                            label="Unit"
                                            style={OwnerResidentStyle.input}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            showSideError={true}
                                        />
                                    </Row>
                                :
                                    null
                            }
                            <Row style={OwnerResidentStyle.labelRow}>
                                <Col style={OwnerResidentStyle.labelCol}>
                                    <View style={[LayoutStyle.labelView, OwnerResidentStyle.labelViewTxt2]}>
                                        <Label style={LayoutStyle.labelViewTxt}>PROPERTY DETAILS</Label>
                                    </View>
                                </Col>
                            </Row>
                            {
                                (!viewData)
                                ?
                                    <Row>
                                        <Col>
                                            <Row style={OwnerResidentStyle.propDetailRow}>
                                                <Col style={OwnerResidentStyle.propDetailCol}>
                                                    <Label style={OwnerResidentStyle.propDetailTxt}>
                                                        Additional property details better prepares providers to give you the
                                                        best service. Feel free to leave some
                                                        blank if need be.
                                                    </Label>
                                                </Col>
                                            </Row>
                                            <Row style={OwnerResidentStyle.titleLabelRow}>
                                                <Col style={OwnerResidentStyle.titleLabelCol}>
                                                    <View style={[LayoutStyle.labelView, OwnerResidentStyle.titleLabelTxt]}>
                                                        <Label style={[LayoutStyle.labelViewTxt, OwnerResidentStyle.titleLabelSubTxt]}>TYPE OF PROPERTY</Label>
                                                    </View>
                                                </Col>
                                            </Row>
                                            <Row style={OwnerResidentStyle.propsTypeRow}>
                                                {
                                                    propTypeBtns.map((value, key) => {
                                                        return(
                                                            <Col key={"propsTypeCol"+key} style={[OwnerResidentStyle.propsTypeCol, {opacity:(value.selected == 2)? 0.5: 1}]}>
                                                                <TouchableOpacity onPress={() => this._onPropType(value.class)}
                                                                                  style={[LayoutStyle.propsTypeBtn, {backgroundColor: value.color}]}>
                                                                    <Image source={value.icon} style={LayoutStyle.propsTypeImage} />
                                                                </TouchableOpacity>
                                                                <Label style={[OwnerResidentStyle.propsTypeLabel, {color:value.color}]}>{value.label}</Label>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                            {
                                                (image != null)
                                                    ?
                                                    <Row style={OwnerResidentStyle.photoRow}>
                                                        <Col style={OwnerResidentStyle.photoCol}>
                                                            <Image source={image} style={OwnerResidentStyle.photo}/>
                                                        </Col>
                                                    </Row>
                                                    :
                                                    null
                                            }
                                            <Row style={OwnerResidentStyle.addPhotoBtnRow}>
                                                <Col style={OwnerResidentStyle.addPhotoBtnCol}>
                                                    <TouchableOpacity
                                                        disabled={disabled}
                                                        onPress={() => this._toggleModal()} style={[LayoutStyle.buttonH1,
                                                        {backgroundColor:(disabled) ? StyleConfig.navyLight : StyleConfig.white},
                                                        OwnerResidentStyle.addPhotoBtn]}>
                                                        <Row>
                                                            <Col style={OwnerResidentStyle.imageBtnCol1}>
                                                                <Icon name='camera' size={StyleConfig.commonIcon}
                                                                      color={(disabled) ? StyleConfig.tan : StyleConfig.blue} />
                                                            </Col>
                                                            <Col style={OwnerResidentStyle.imageBtnCol2}>
                                                                <Text style={[LayoutStyle.buttonH1Text, OwnerResidentStyle.addPhotoBtnTxt,
                                                                    {color:(disabled) ? StyleConfig.tan : StyleConfig.blue}
                                                                ]}>{Txt}</Text>
                                                            </Col>
                                                        </Row>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                :
                                    null
                            }
                            {
                                (addPropertyManaging)
                                ?
                                    <Row>
                                        <Col style={OwnerResidentStyle.numberResidentCol}>
                                            <NumberOfResidentCard
                                                  residentCount={residentCount}
                                                  onChange={(residentCount) => {
                                                      this._onChangeNumber(residentCount)
                                                  }} />
                                        </Col>
                                    </Row>
                                :
                                    null
                            }
                            {
                                (!viewData)
                                ?
                                    <Row>
                                        <Col>
                                            <Row style={OwnerResidentStyle.titleLabelRow}>
                                                <Col style={OwnerResidentStyle.titleLabelCol}>
                                                    <View style={[LayoutStyle.labelView, OwnerResidentStyle.titleLabelTxt]}>
                                                        <Label style={[LayoutStyle.labelViewTxt, OwnerResidentStyle.titleLabelSubTxt]}>FEATURES</Label>
                                                    </View>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Label>COMING SOON</Label>
                                            </Row>
                                        </Col>
                                    </Row>
                                :
                                    null
                            }


                            <Row style={OwnerResidentStyle.titleLabelRow}>
                                <Col style={OwnerResidentStyle.titleLabelCol}>
                                    <View style={[LayoutStyle.labelView, OwnerResidentStyle.titleLabelTxt]}>
                                        <Label style={[LayoutStyle.labelViewTxt, OwnerResidentStyle.titleLabelSubTxt]}>
                                            {(!viewData) ? 'NOTES' :  'MY NOTES' }
                                        </Label>

                                    </View>
                                </Col>
                            </Row>
                            {
                                (viewData)
                                    ?
                                        <Row>
                                            <Col>
                                                <Label style={OwnerResidentStyle.propDetailTxt}>
                                                    Add any additional notes to your rental that
                                                    you feel are necessary for providers:
                                                </Label>
                                            </Col>
                                        </Row>
                                    :
                                    null
                            }
                            <Row style={OwnerResidentStyle.noteRow}>
                                <ReduxField
                                    name="notes"
                                    placeholder="Type here"
                                    placeholderTextColor={StyleConfig.placeholderColor}
                                    label={(!viewData) ? 'Additional Notes' :  'Resident Notes' }
                                    style={OwnerResidentStyle.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    showSideError={true}
                                    info="Optional"
                                />
                            </Row>
                            <Row style={OwnerResidentStyle.saveBtnRow}>
                                <Col style={OwnerResidentStyle.saveBtnCol}>
                                    {
                                        (!viewData)
                                        ?
                                            <TouchableOpacity
                                                disabled={(btnDisable) ? btnDisable : invalid }
                                                onPress={handleSubmit((viewProperty != null) ? this._updateProperty.bind(this) : this._saveProperty.bind(this)) }
                                                style={[LayoutStyle.buttonH1,
                                                    ((btnDisable) ? btnDisable : invalid ) ? OwnerResidentStyle.saveBtnDisabled : OwnerResidentStyle.saveBtn]}>
                                                <Text style={[LayoutStyle.buttonH1Text, OwnerResidentStyle.saveBtnTxt]}>
                                                    {(viewProperty != null) ? "UPDATE PROPERTY" : "SAVE PROPERTY"}
                                                </Text>
                                            </TouchableOpacity>
                                        :
                                            <TouchableOpacity
                                                disabled={(btnDisable) ? btnDisable : invalid }
                                                onPress={handleSubmit(this._updateResidentById.bind(this)) }
                                                style={[LayoutStyle.buttonH1,
                                                    ((btnDisable) ? btnDisable : invalid ) ? OwnerResidentStyle.saveBtnDisabled : OwnerResidentStyle.saveBtn]}>
                                                <Text style={[LayoutStyle.buttonH1Text, OwnerResidentStyle.saveBtnTxt]}>
                                                    SAVE CHANGES
                                                </Text>
                                            </TouchableOpacity>
                                    }

                                </Col>
                            </Row>
                            {
                                (viewProperty != null)
                                ?
                                    <Row style={OwnerResidentStyle.removeBtnRow}>
                                        <Col style={OwnerResidentStyle.removeBtnCol}>
                                            <TouchableOpacity
                                                onPress={()=> {(viewData) ? Actions.residentRemoveProperty() : Actions.removeOwnerResidentProperty()}}
                                                style={[LayoutStyle.buttonH1, OwnerResidentStyle.removeBtn]}>
                                                <Text style={[LayoutStyle.buttonH1Text, OwnerResidentStyle.removeBtnTxt]}>
                                                    REMOVE PROPERTY
                                                </Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                :
                                    null
                            }

                            <Row style={OwnerResidentStyle.cancelRow}>
                                <Col style={OwnerResidentStyle.cancelCol}>
                                    <TouchableOpacity onPress={() => (viewProperty != null) ? Actions.viewPropertyDetails() : Actions.addProperty()}>
                                        <Text style={OwnerResidentStyle.cancelText}>CANCEL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={OwnerResidentStyle.lastRow}>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }

}

const validate = values => {
    let errors = {};
    errors.name = !values.name
        ? 'Property Name'
        : undefined;
    errors.class = !values.class
        ? 'Class'
        : undefined;
    errors.address = !values.address
        ? 'Address'
        : undefined;
    return errors;
};

const initialValues = {
    name:'',
    class:0,
    address:'',
    unit:'',
    notes:'',
    lat:0,
    lng:0,
    resident_count:0
};

const withForm = reduxForm({
    form: 'addPropertyForm',
    validate,
    initialValues
});

export default withProperty(withLoader(withToast(withForm(OwnerResident))));
