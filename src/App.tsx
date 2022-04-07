import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Nav from './components/Nav';
import Title from './components/Title';

function App() {
  const [light, setLight] = useState(true);
  const [titleOver, setTitleOver] = useState(false);

  function changeMode() {
    if (light) setLight(false);
    else setLight(true);
  }

  return (
    <div className={light ? '' : ' dark'}>
      <div
        className="flex justify-center min-w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="flex flex-col min-w-[320px] sm:min-w-[480px]">
          <header className="flex justify-end p-4">
            <button type="button" onClick={changeMode}>
              {light
                ? <MdDarkMode size={32} className="fill-red-300" />
                : <MdLightMode size={32} className="fill-white" />}
            </button>
          </header>
          <main className="flex flex-col flex-1">
            <Title setTitleOver={setTitleOver} />
            <Nav titleOver={titleOver} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
