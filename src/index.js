import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bgm from './components/Bgm';
import Loading from './components/Loading';

import GlobalStyle from './Global.style';

import { unregister } from './registerServiceWorker';
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
ReactDOM.render(<Coms />, document.getElementById('root'));

unregister();
