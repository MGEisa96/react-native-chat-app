import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

function MainStack() {
  const [user, setUser] = React.useState();
  console.log(user);
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user =>
      user ? setUser(user) : setUser(null),
    );
    return subscriber;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Auth'}
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <Stack.Screen
            name={'Home'}
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen name={'Auth'} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
//01068079769
