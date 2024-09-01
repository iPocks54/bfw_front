import React from 'react';
import UnityGame from './components/UnityGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Battle Flag Worldwide</h1>
        <p>Welcome to Battle Flag Worldwide Simulator!</p>
      </header>
      <main className="App-main">
        <div className="unity-container">
          <UnityGame />
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Battle Flag Worldwide. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
