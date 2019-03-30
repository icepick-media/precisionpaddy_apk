/**
 * Aneep Tandel
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './common/Navigator';
import store from './store';

interface Props {}
export default class App extends Component<Props> {
  state = {
      isLoggedIn: false
  }

  render() {
    return <Provider store={store}>
              <ImageBackground source={require("./common/images/LoginImg.png")} style={{width: '100%', height: '100%'}}>
                <Navigator />
              </ImageBackground>
           </Provider>
  }
}
