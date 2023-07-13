// import ModbusRTU from 'modbus-serial';

// const client = new ModbusRTU();
// const ip = '192.168.43.184';
// const port = 502;

// client.connectTCP(ip, { port });

// const BUZZER_COIL = 4001;
// const HUMIDITY_IREG = 4003;
// const TEMPERATURE_IREG = 4004;
// const SENSOR_TYPE = 4005;

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const data = parseInt(req.body.data);

//     try {
//       await client.writeCoil(BUZZER_COIL, data);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('checking', error);
//       res.status(500).json({ success: false });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const [humidity, temperature, sensorType] = await Promise.all([
//         client.readInputRegisters(HUMIDITY_IREG, 1),
//         client.readInputRegisters(TEMPERATURE_IREG, 1),
//         client.readInputRegisters(SENSOR_TYPE, 1),
//       ]);

//       res.status(200).json({
//         success: true,
//         data: {
//           humidity: humidity.data[0],
//           temperature: temperature.data[0],
//           sensorType: sensorType.data[0],
//         },
//       });
//     } catch (error) {
//       console.error('here', error);
//       res.status(500).json({ message: "Error fetching data" });
//     }
//   }
//   // res.status(200).send({message: data})
// }
