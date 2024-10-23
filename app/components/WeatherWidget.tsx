"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface WeatherData {
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    humidity: number;
    wind_kph: number;
  };
}

const WeatherWidget: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'c538fd13cd9a434ab7b161522241210';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('City not found or error fetching weather data.');
      setWeatherData(null);
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (city) {
      fetchWeather();
    } else {
      setError('Please enter a city name.');
    }
  };

  // Inline styling
  const styles = {
    container: {
      backgroundColor: '#f0f4f8',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    formBox: {
      border: '2px solid #007bff',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      marginBottom: '20px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '10px',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    weatherInfo: {
      marginTop: '20px',
      textAlign: 'center' as 'center',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    weatherIcon: {
      width: '50px',
      height: '50px',
      padding: '5px',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
    blueIconContainer: {
      width: '45px',
      height: '45px',
      display: 'flex',
      margin: '0 auto',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      border: '2px solid #007bff',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      marginTop: '20px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    weatherText: {
      marginBottom: '5px',
      fontSize: '16px',
      textAlign: 'center' as 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <form onSubmit={handleSearch} style={styles.form}>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor; // Change background color on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = styles.button.backgroundColor; // Reset background color
            }}
          >
            Search
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>

      {weatherData && (
        <div style={styles.box}>
          <div style={styles.blueIconContainer}>
            <Image
              src={weatherData.current.condition.icon.startsWith('//')
                ? `https:${weatherData.current.condition.icon}`
                : weatherData.current.condition.icon}
              alt="Weather icon"
              width={50}
              height={50}
              style={styles.weatherIcon}
            />
          </div>

          <div style={styles.weatherInfo}>
            <p style={styles.weatherText}>{weatherData.current.condition.text}</p>
            <p style={styles.weatherText}>{weatherData.current.temp_c}°C</p>
            <p style={styles.weatherText}>Humidity: {weatherData.current.humidity}%</p>
            <p style={styles.weatherText}>Wind Speed: {weatherData.current.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;








