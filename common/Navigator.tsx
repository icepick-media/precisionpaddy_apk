import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';

export interface INavigatorProps {
    auth: any;
    nav: any;
}

class Navigator extends Component<INavigatorProps> {
    constructor(props: INavigatorProps) {
        super(props);
    }

    render() {
        const { auth, nav } = this.props;
        let screen: Element;
        if(auth.isAuthenticated){
            switch(nav.currentNav) {
                case 'dashboard': {
                    screen = <Dashboard />
                    break;
                }
                default: {
                    screen = <Dashboard />
                    break;
                }
            }

            return screen;
        } else {
            return <Login />
        }
    }
}
  
const mapStateToProps = (state: any) => ({
    auth: state.auth,
    nav: state.nav
});
  
export default connect(mapStateToProps, {})(Navigator);
