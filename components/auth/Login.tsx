import React, { Component } from 'react';
import { 
    Button,
    Text, 
    View, 
    Image, 
    TextInput, 
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { loginUser, getAuthInfo } from '../../actions/authActions';
import { changeNavigation } from '../../actions/navActions';
import { styles, loginStyles } from "../../common/styles";

export interface ILoginProps {
    loginUser: Function,
    getAuthInfo: Function,
    changeNavigation: Function,
    auth: Object,
    errors: Object,
    nav: Object
}

class Login extends Component<ILoginProps> { 

    state = { 
        username: "", 
        password: "",
        showProgress: false
    };

    constructor(props: ILoginProps) {
        super(props);
    }

    componentDidMount() {
        // this.props.getAuthInfo();
    }

    submitLogin = (e: any) => {
        this.setState({
            showProgress: true
        });

        this.props.loginUser({
            username: this.state.username,
            password: this.state.password
        })
        .then(() => {
            this.props.changeNavigation('dashboard');
            this.setState({showProgress: false});
        });

    }

    render() {
        let loginButtonText = <Text
                                    style={styles.buttonText}
                                >
                                Login
                            </Text>
        if(this.state.showProgress){
            loginButtonText = <ActivityIndicator
                                    animating={this.state.showProgress}
                                    size="large"
                                    color="#fff"
                                    style={styles.loader}
                                />
        }
        return (
            <View style={styles.container}>
                <View style={styles.containerWithHeader}>
                    <Image style={styles.logo} source={require("../../common/images/Logo.png")} />
                    <Text style={styles.heading}></Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(text) => this.setState({username: text})} 
                        placeholder="Username"
                        placeholderTextColor="#000"
                    />
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(text) => this.setState({password: text})}
                        secureTextEntry={true} 
                        placeholder="Password" 
                        placeholderTextColor="#000"  
                    />

                </View>
                <TouchableHighlight onPress={this.submitLogin} style={styles.button}>
                    {loginButtonText}
                </TouchableHighlight>
            </View>
        )
    }
}
  
const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors,
    nav: state.nav
});
  
export default connect(
    mapStateToProps,
    { loginUser, getAuthInfo, changeNavigation }
)(Login);
