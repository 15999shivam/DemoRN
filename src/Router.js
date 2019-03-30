import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CameraAcm from './camera'
import Home from './Home'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={Home} title="Acm App" initial />
                </Scene>
               <Scene key="camera" component={CameraAcm} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
