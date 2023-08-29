import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './navigations/RootNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation></RootNavigation>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

