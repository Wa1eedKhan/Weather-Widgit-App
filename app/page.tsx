import React from 'react';
import WeatherWidget from './components/WeatherWidget';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Weather App</h1>
      <p style={styles.subheading}>Check the current weather conditions for your city</p>
      
      <WeatherWidget />

    </div>
  );
};

// Inline styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#eef2f7',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold' as 'bold',
    marginBottom: '10px',
    color: '#007bff',
  },
  subheading: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#333',
  },
};

export default Home;



