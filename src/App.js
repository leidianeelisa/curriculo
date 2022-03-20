import './App.css';

import { useEffect, useState } from 'react';

import Pages from './pages';

function App() {
  const [profile, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/leidianeelisa')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setUser(data);
        }, 1000);
      });
  }, []);

  if (!profile) {
    return '<div> Aqui terá um loading component</div>';
  }

  return <Pages profile={profile} />;
}

export default App;
