import React, { Component } from 'react';
import {
    Text, 
    View,
    ActivityIndicator,
} from 'react-native';
import { connect } from "react-redux";
import { logOut } from '../../actions/authActions';
import { changeNavigation } from '../../actions/navActions';
import { AUTH_KEY } from '../../utils/keys';
import { styles, dashboardStyles } from "../../common/styles";
import { Header, Icon } from 'react-native-elements';

export interface IDashboardProps {
    logOut: Function,
    changeNavigation: Function,
    auth: any,
    nav: Object,
    user: any
}

class Dashboard extends Component<IDashboardProps> {

    state = {
        token: '',
        showProgress: false
    }

    componentDidMount = () => {

    }

    render() {
        const { user } = this.props;
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={styles.header}
                    leftComponent={{ icon: '', color: '#fff' }}
                    centerComponent={{ text: 'Organization Members', style: styles.headerText }}
                    rightComponent={<Icon name='sign-out' type='font-awesome' color='#fff' onPress={() => console.log('logout')} />}
                >
                </Header>
                <View style={styles.containerWithHeader}>
                    <Text>Wecome to Dashboard</Text>

                    <ActivityIndicator
                        animating={this.state.showProgress}
                        size="large"
                        color="#fff"
                        style={styles.loader}
                    />
                </View>
                <View></View>
            </View>
        )
  }
}
  
const mapStateToProp = (state: any) => ({
    auth: state.auth,
    nav: state.nav,
    user: state.user
});
  
export default connect(mapStateToProp, { 
    logOut, 
    changeNavigation,
})(Dashboard);