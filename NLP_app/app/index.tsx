import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Button, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getGoogleAPI, postLlamaAPI } from '../services/api';
import { createDynamicStyles, staticStyles } from '../components/styles';

export default function App() {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [result, setResult] = useState('');

  const toggleTheme = () => {
    setIsButtonPressed(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const fetchGoogleAPI = async () => {
    try {
      const data = await getGoogleAPI();
      setResult(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLlamaAPI = async () => {
    try {
      const data = { key: 'value' };  // Replace with actual data
      const response = await postLlamaAPI(data);
      setResult(JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  const currentTheme = isButtonPressed ? theme : systemColorScheme;
  const isDarkMode = currentTheme === 'dark';

  const textColor = isDarkMode ? 'white' : 'black';

  const dynamicStyles = createDynamicStyles(textColor);

  return (
    <View style={[staticStyles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <TouchableOpacity onPress={toggleTheme} style={staticStyles.buttonContainer}>
        <LinearGradient
          colors={['#000000', '#FFFFFF']}
          style={staticStyles.circle}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </TouchableOpacity>
      <View style={staticStyles.center}>
        <TouchableOpacity onPress={handleImageClick}>
          <Image 
            source={require('../assets/images/microphone.png')} 
            style={[
              staticStyles.microphone,
              {
                tintColor: isImageClicked ? 'blue' : null,
              }
            ]}
          />
        </TouchableOpacity>
        <Text style={dynamicStyles.baseText}>Press the microphone to begin translation!</Text>
        <Button title="Fetch Google API" onPress={fetchGoogleAPI} />
        <Button title="Fetch Llama API" onPress={fetchLlamaAPI} />
        <Text style={dynamicStyles.baseText}>{result}</Text>
      </View>
    </View>
  );
}
