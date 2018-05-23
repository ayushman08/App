import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {
    firstNameChanged,
    lastNameChanged,
    emailChanged,
    showLoading,
    resetState,
    clearResponse
} from "./ContactAction";
import {
    userSignup,
} from "../../Action/ActionCreators";
import {Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from "../Common/Header"
import MaterialTextInput from 'react-native-material-textinput';
const { width, height } = Dimensions.get('window');
import Strings from '../../Constants/Strings';
import Colors from '../../Constants/Colors';


class ContactComponent extends Component {
     constructor() {
        super();
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            password:""
     };
    }

    onFirstNameChanged(text) {

        this.props.firstNameChanged(text);
        // this.setState({ errorMsg: '' });
        // this.setState({ errorOnTextField: '' });
    }

    onLastNameChanged(text){
        this.props.lastNameChanged(text);
    }

    onEmailChanged(text){
        this.props.emailChanged(text);
    }

    

    submit(){
      
        if (this.props.contactreducer.first_name.trim() == '') {

            // this.setState({ errorMsg: Strings.ERROR_EMPTY_EMAIL });
            // this.setState({ errorOnTextField: 0 });
        }
         else if (this.props.contactreducer.last_name.trim() == '') {
    
            // this.setState({ errorMsg: Strings.ERROR_EMPTY_PASSWORD });
            // this.setState({ errorOnTextField: 0 });
        }  else {
    
            postData = {
                username: this.props.contactreducer.first_name,
                password: this.props.contactreducer.last_name,
                email:this.props.contactreducer.email,
                savedScreen:"1"
            };
          //  this.props.showLoading();
          console.log(postData)
            this.props.userSignup(postData);
        }
        
    }
    
    goBack(){
    Actions.pop()
    }
    render() {
        return (
         <View style={{flex:1}}>
          <View style={styles.viewStyle}>
          <Text style={{fontSize: 18,marginRight:10}}>01</Text>
          
          <Text style={{fontSize: 18,textAlign:'center'}}>CONTACT INFORMATION</Text>
          </View>
          <ScrollView style={{flex:1,backgroundColor:Colors.BACKGROUND_COLOR_GENERAL}}>
          <Text style={{textAlign:"center",color:'black',fontWeight:"600",marginTop:40,marginBottom:20,fontSize:18}}>{Strings.WHATS_YOUR_NAME}</Text>
          <View style={{justifyContent:"center",alignItems:"center",margin:20}}>
          <Image source={require('../../Assets/email.png')}/>
          </View>

          <View style={{flexDirection:"row",flex:1,margin:10}}>
          <View style={{flex:1,margin:10}}>
      
          <MaterialTextInput
                            label={Strings.FIRST_NAME}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            labelActiveTop={-30}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={this.onFirstNameChanged.bind(this)}
                            value={this.props.contactreducer.first_name}
                            onSubmitEditing={(event)=>{this.refs.lastname.focus()}}
                           
                        />
            </View>

            <View style={{flex:1,margin:10}}>
            <MaterialTextInput
                            ref="lastname"
                            label={Strings.LAST_NAME}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={this.onLastNameChanged.bind(this)}
                            value={this.props.contactreducer.last_name}
                            onSubmitEditing={(event)=>{this.refs.email.focus()}}
                           
                           
                        />
        
            </View>

            </View>

            <View  style={{flex:1,margin:20}}>
            <MaterialTextInput
                            ref="email"
                            label={Strings.EMAIL}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={this.onEmailChanged.bind(this)}
                            value={this.props.contactreducer.email}
                           
                        />
        
            </View>

             
            {/* <View style={{margin:20}}>
            
            <MaterialTextInput
                            label={Strings.PASSWORD}
                            labelColor={Colors.LABEL_TEXT_COLOR}
                            activeColor={Colors.LABEL_TEXT_COLOR}
                            color={Colors.TEXT_COLOR}
                            fontSize={15}
                            underlineColor={Colors.TEXT_COLOR}
                            underlineActiveColor={Colors.TEXT_COLOR}
                            underlineHeight={0.7}
                            underlineActiveHeight={0.7}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            returnKeyType='next'
                            onChangeText={(password)=>{this.setState({password})}}
                           
                        />
            </View> */}
             <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
             <Button rounded  style={{width:width/2.4,justifyContent:"center",margin:15,alignItems:"center",backgroundColor:Colors.BUTTON_COLOR,padding:0}} onPress={()=>{this.submit()}}>
             <Text style={{color:"white",textAlign:"center",fontWeight:"800", fontSize: 16,fontFamily:"Roboto"}}>{Strings.NEXT}</Text>
             </Button>
             </View>
             
             <TouchableWithoutFeedback onPress={this.goBack}>
             <View>
             <Text style={{textAlign:"center"}}>{Strings.HOME}</Text></View>
             </TouchableWithoutFeedback>

            </ScrollView>
         
         </View>  

         
        );
    }

}


const styles = {
    viewStyle: {
      backgroundColor: 'white',
      justifyContent:"center",
      //   alignItems: 'center',
      height: 60,
      paddingTop:30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      elevation: 5,
      flexDirection:'row'

    }
  
  };

  function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        contactreducer: state.contactReducer
    }
}


export default connect(
    mapStateToProps,
    {
    userSignup,
    firstNameChanged,
    lastNameChanged,
    emailChanged,
    showLoading,
    resetState,
    clearResponse
    }

)(ContactComponent)