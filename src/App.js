import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/leidianeelisa')
      .then(res => res.json())
      .then(userData => {
        setTimeout(() => {
          setUser(userData);
        }, 1000);
      });
  }, []);

  if (!user) {
    return '<div> Aqui terá um loading component</div>';
  }

  return '<div> Aqui terá um Page component</div>'
}

export default App;
