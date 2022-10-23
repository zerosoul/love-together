import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Bgm from './components/Bgm';
import Loading from './components/Loading';

import GlobalStyle from './Global.style';

const Coms = () => {
  const [loaded, setLoaded] = useState(false);
  const [canplay, setCanplay] = useState(false);
  useEffect(() => {
    window.onload = () => {
      console.log('loaded');

      setLoaded(true);
    };
    return () => {
      window.onload = null;
    };
  }, []);
  return (
    <>
      {(!loaded || !canplay) && <Loading />}
      <Bgm
        loadOver={() => {
          setCanplay(true);
        }}
      />
      <GlobalStyle />
      {loaded && canplay && <App />}
    </>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<Coms />);
