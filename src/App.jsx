// // import  { useEffect, useState } from 'react';
// // import WebSocketClient from 'websocket';

// // const OnlineUsers = () => {
// //   const [onlineUsers, setOnlineUsers] = useState([]);

// //   useEffect(() => {
// //     const socket = new WebSocketClient('ws://your_server_url/ws/room/your_room_name/');

// //     socket.onopen = () => {
// //       console.log('WebSocket connection established.');
// //     };

// //     socket.onmessage = (event) => {
// //       const data = JSON.parse(event.data);
// //       if (data.username) {
// //         if (data.username === 'system') {
// //           // Handle system messages (user join/leave)
// //           if (data.message) {
// //             // Update the online users list based on the system message
// //             setOnlineUsers((prevOnlineUsers) => {
// //               if (data.message.includes('joined')) {
// //                 return [...prevOnlineUsers, data.message.split(' ')[0]];
// //               } else if (data.message.includes('left')) {
// //                 return prevOnlineUsers.filter((user) => user !== data.message.split(' ')[0]);
// //               } else {
// //                 return prevOnlineUsers;
// //               }
// //             });
// //           }
// //         } else {
// //           // Handle regular chat messages
// //         }
// //       }
// //     };

// //     socket.onclose = (event) => {
// //       console.error('WebSocket closed:', event);
// //     };

// //     return () => {
// //       socket.close();
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Online Users</h2>
// //       <ul>
// //         {onlineUsers.map((user) => (
// //           <li key={user}>{user}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default OnlineUsers;

// import  { useState } from 'react';
// import { Image } from 'antd';
// function App() {
//   const [imageBase64, setImageBase64] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
    
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (event) => {
//         const base64String = event.target.result;
//         setImageBase64(base64String);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <h1>Image to Base64 Converter</h1>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//       />
//       {imageBase64 && (
//         <div>
//           <h2>Base64 Image:</h2>
//           <img src={imageBase64} alt="Selected" />
//           <Image
//     width={200}
//     src={imageBase64}  />
//           <textarea
//             value={imageBase64}
//             rows={5}
//             cols={50}
//             readOnly
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// import  { useState } from 'react';

// function App() {
//   const [size, setSize] = useState('800px');
//   const [zIndex, setZIndex] = useState(1);

//   const increaseSize = () => {
//     setSize('200px');
//   };

//   const decreaseSize = () => {
//     setSize('100px');
//   };

//   const changeZIndex = () => {
//     setZIndex(zIndex === 1 ? 2 : 1);
//   };
//   const containerStyle = {
//     width: size,
//     height: size,
//     backgroundColor: 'lightblue',
//     position: 'absolute',
//     zIndex: zIndex,
//   };
//   const [base64Data, setBase64Data] = useState('');
  
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       // Create a FileReader to read the selected file as base64
//       const reader = new FileReader();
      
//       reader.onload = (e) => {
//         // Get the base64 data from the FileReader result
//         const base64 = e.target.result;
//         setBase64Data(base64);
//       };
      
//       reader.readAsDataURL(file);
//     }
//   };
// console.log(base64Data)

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
     
//       <embed  src={base64Data} type="application/pdf" width={size} height="330px"/>
//       <div style={containerStyle}>
//       <p>Size: {size}</p>
//       <p>Z-Index: {zIndex}</p>
//       <button onClick={increaseSize}>Increase Size</button>
//       <button onClick={decreaseSize}>Decrease Size</button>
//       <button onClick={changeZIndex}>Change Z-Index</button>
//     </div>
      
                
//     </div>
//   );
// }

// // export default App;
// import  { useState } from 'react';

// const ByteObjectToUint8Array = () => {
//   const byteData = {
//     0: 31,
//     1: 139,
//     2: 8,
//     3: 0,
//     4: 0,
//     5: 0,
//     6: 0,
//     7: 0,
//     8: 0,
//     9: 3,
//     10: 76,
//     11: 151,
//     12: 83,
//     13: 112,
//     14: 37,
//     15: 76,
//   };

//   // Determine the length of the Uint8Array
//   const length = Math.max(...Object.keys(byteData)) + 1;

//   // Create a Uint8Array and initialize it with the values from the object
//   const uint8ArrayData = new Uint8Array(length);
//   for (const key in byteData) {
//     if (byteData.hasOwnProperty(key)) {
//       uint8ArrayData[key] = byteData[key];
//     }
//   }

//   return (
//     <div>
//       <h1>Byte Object to Uint8Array</h1>
//       <div>
//         <strong>Byte Object:</strong>
//         <pre>{JSON.stringify(byteData, null, 2)}</pre>
//       </div>
//       <div>
//         <strong>Uint8Array Data:</strong>
//         <pre>{JSON.stringify(Array.from(uint8ArrayData), null, 2)}</pre>
//       </div>
//     </div>
//   );
// };

// export default ByteObjectToUint8Array;

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [myState, setMyState] = useState(null);
  
  // useEffect to run code after 2 seconds when myState is initially set
  useEffect(() => {
    console.log("hi");
    // Check if myState has been set (not null) and it's the first time this effect runs
    if (myState !== null) {
      const timerId = setTimeout(() => {
        // Code to execute after 2 seconds
        console.log('Code executed after 2 seconds:', myState);
      }, 2000);
      
      // Clean up the timer if the component unmounts or myState changes
      return () => clearTimeout(timerId);
    }
  }, [myState]); // Run this effect whenever myState changes
  
  // Update myState (for example, on a button click)
  const handleClick = () => {
    setMyState('New State Value');
  };

  return (
    <div>
      <button onClick={handleClick}>Set State</button>
    </div>
  );
}

export default MyComponent;
