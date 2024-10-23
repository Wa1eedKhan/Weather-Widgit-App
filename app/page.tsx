import React from 'react';
import WeatherWidget from './components/WeatherWidget';

const Home: React.FC = () => {
  // Inline styling
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#eef2f7',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold' as const,
      marginBottom: '10px',
      color: '#007bff',
    },
    subheading: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to our Weather App</h1>
      <p style={styles.subheading}>Check the current weather conditions for your city</p>
      
      <WeatherWidget />
    </div>
  );
};

export default Home;




