import { StyleSheet } from 'react-native';

export const createDynamicStyles = (textColor) => StyleSheet.create({
  baseText: {
    fontSize: 20,
    color: textColor,
  },
});

export const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'linear-gradient(45deg, #87CEEB, #D3D3D3)', // Gradient background
    elevation: 10, // Android shadow effect
    shadowColor: '#000', // iOS shadow effect
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
  microphone: {
    width: 200,
    height: 200,
    borderColor: '#87CEEB', // Soft blue border color
    borderWidth: 5,
    borderRadius: 100,
    backgroundColor: '#D3D3D3', // Light gray inner color
    elevation: 10, // Android shadow effect
    shadowColor: '#000', // iOS shadow effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    tintColor: null, // Default tint color
  },
  content: {
    alignItems: 'center',
    padding: 20, // Add padding here to separate the image and the text
  },
});
