import { StyleSheet } from 'react-native';

// Global styles
const styles = StyleSheet.create({
    header: {
        width: 375,
        marginLeft: -15,
        backgroundColor: '#508f53',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    containerWithHeader: {
        alignItems: 'center',
        // backgroundColor: '#3cada5',
        fontFamily: 'Open Sans',
        height: 620,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    heading: {
        fontSize: 25,
        marginTop: 30
    },
    userDetail: {
        fontSize: 15,
        paddingTop: 20,
        alignSelf: 'auto',
        color: '#fff'
    },
    logo: {
        width: 240,
        height: 134,
        marginBottom: 60,
        marginTop: 220,
    },
    userLogo: {
        width: 50,
        height: 50,
        marginBottom: 10,
        alignSelf: 'flex-end',
    },
    wifiLogo: {
        width: 30,
        height: 30,
        marginBottom: 15,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    input: {
        height: 50,
        alignSelf: 'stretch',
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        color: '#000',
    },
    button: {
        height: 50,
        backgroundColor: '#508f53',
        alignSelf: 'stretch',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 22,
        height: 50,
        padding: 10,
        color: "#fff",
        alignItems: 'center'
    },
    loader: {
        // marginTop: 20
    },
    closeButton: {
        padding: 20,
        textAlign: 'center',
      },
      json: {
        padding: 10,
      },
      state: {
        fontSize: 20,
        textAlign: 'center',
        margin: 30,
      }
});

// Dashboard styles
const dashboardStyles = StyleSheet.create({
    userList: {
        flex: 2, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flatList: {
        // paddingTop: 100,
        alignSelf: 'stretch',
    },
    usersList: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomWidth: 1,
        borderColor: '#fff',
        alignSelf: 'stretch',
    },
    userConfigurationButton: {
        marginTop: 10,
        backgroundColor: "#508f53",
        borderRadius: 30,
        height: 40,
    },
    buttonText: {
        fontSize: 15,
        height: 50,
        padding: 11,
        color: "#fff",
        alignItems: 'center'
    },
});

// Login styles
const loginStyles = StyleSheet.create({
    loginButton: {
        height: 50,
        padding: 15,
        color: "#fff",
        alignItems: 'center'
    }
});

export { styles, loginStyles, dashboardStyles }
