// App.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import HospitalRegistration from './Components/HospitalRegistration';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return (
      <View style={styles.centered}>
        <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>
          Welcome to App
        </Animated.Text>
      </View>
    );
  }

  return <HospitalRegistration />;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b5998',
  },
});

export default App;
