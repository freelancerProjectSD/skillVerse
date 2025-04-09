import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Update the fetch URL to point to your deployed backend URL
    const backendUrl = 'https://skillverseback-gjatfng2btdjgwfp.canadacentral-01.azurewebsites.net';

    fetch(`${backendUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend + Backend Test</h1>
        <p>{message || "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
