import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
  const [value, setValue] = useState('');
  const [humidity, setHumidity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [sensorType, setSensorType] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  };

  const handleButtonClick = async () => {
    // console.log('first')
    // try {
    //   const response = await fetch('/api/modbus', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ value }),
    //   });

    //   const data = await response.json();
    //   console.log('jgjhhgs')

    //   if (data.success) {
    //     // display a success message
    //     console.log('went through')
    //   } else {
    //     // display an error message
    //     console.log('did not')
    //   }
    // } catch (error) {
    //   console.error(error);
    //   // display an error message
    // }

    try {
        const res = await axios.post('api/modbus', {data: value})
        console.log(res.data)
    }
    catch(err) {
        console.log(err)
    }
    
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch('/api/modbus');
        const data = await response.json();

        if (data.success) {
          setHumidity(data.data.humidity);
          setTemperature(data.data.temperature);
          setSensorType(data.data.sensorType);
        } else {
          // display an error message
        }
      } catch (error) {
        console.error(error);
        // display an error message
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Modbus Interface</h1>
      <label>
        Write to Buzzer:
        <input type="text" value={value} onChange={handleInputChange} className='border p-2'/>
      </label>
      <button onClick={handleButtonClick} className='bg-orange-600 text-white p-2 rounded-md'>Submit</button>
      <h2>Read from Registers:</h2>
      <p>Humidity: {humidity}</p>
      <p>Temperature: {temperature}</p>
      <p>Sensor Type: {sensorType}</p>
    </div>
  );
}
