import {StatusBar, Text} from 'react-native';
import theme from './src/global/styles/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Routes from './src/routes';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.TESTE}
      />
      <Routes />
    </GestureHandlerRootView>
  );
}

export default App;
