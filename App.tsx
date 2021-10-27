import {Provider} from 'mobx-react';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {Navigator} from './src/navigation/Navigation';
import rootStore from './src/state/RootState';

const App = () => {
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <Provider store={rootStore}>
      <Navigator />
    </Provider>
  );
};
export default App;
