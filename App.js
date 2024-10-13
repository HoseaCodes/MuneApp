import React, { useEffect } from "react";
import { registerRootComponent } from "expo";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { BlurView } from "expo-blur";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "./src/components/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRegistry, Image } from 'react-native';

import Mune_Logo from './assets/images/Mune_Logo.png';
import * as SplashScreen from "expo-splash-screen";
// import Amplify from "aws-amplify";
// import config from "./src/aws-exports";
// Amplify.configure(config);
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import PhoneLoginScreen from "./src/screens/PhoneLoginScreen";
import MFAScreen from "./src/screens/MFAScreen";
import TransactionScreen from "./src/screens/TransactionScreen";
import TransactionDetailScreen from "./src/screens/TransactionDetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 100,
            borderTopWidth: 0,
            paddingVertical: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 10,
            zIndex: 5,
            borderColor: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
          },
          tabBarBackground: () => (
            <BlurView
              intensity={50}
              tint="light"
              style={{
                flex: 1,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            let style = {
              fontSize: 22.35,
              fontWeight: '590',
              textAlign: 'center',
              color: focused ? '#1DBF38' : '#CDCFCE',
              width: 30,
              height: 27,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              opacity: 0.9,
            };
  
            switch (route.name) {
              case 'Transactions':
                iconName = 'building';
                break;
              case 'TransactionDetails':
                iconName = 'graduation-cap';
                break;
              case 'Transfer':
                iconName = 'exchange';
                break;
              case 'Money':
                iconName = 'money';
                break;
              case 'Search':
                iconName = 'search';
                break;
            }
  
            // Return the styled icon
            return <FontAwesome name={iconName} style={style} />;
          },
        })}
      >
        <Tab.Screen name="Transactions" options={{ headerShown: false }}   component={TransactionScreen} />
        <Tab.Screen name="TransactionDetail"  options={{ headerShown: false }}  component={TransactionDetailScreen} />
        <Tab.Screen name="Transfer" component={PhoneLoginScreen} />
        <Tab.Screen name="Money" component={MFAScreen} />
        <Tab.Screen name="Search" component={RegisterScreen} />
      </Tab.Navigator>
    );
  }  
  
  

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  } else {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
                // Non-clickable logo in the top-left corner
                headerLeft: () => (<Image
                  source={Mune_Logo}
                  style={{ width: 127.34, height: 20, marginLeft: 20 }}
                />),
                headerTitle: '',
                headerStyle: {
                  backgroundColor: '#F2F7F3',
                },
                headerShadowVisible: false
                }} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
            <Stack.Screen name="MFA" component={MFAScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="TransactionDetails" options={{headerShown: false}} component={TransactionDetailScreen} />
            <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
            {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
            <Stack.Screen name="Dashboard" options={{ headerShown: false }}  component={Tabs} />

          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('main', () => App);

export default App;
