import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Bun venit la Axy Asigurări!</h1>
            <p>Aici poți descoperi cele mai bune oferte de asigurări!</p>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
