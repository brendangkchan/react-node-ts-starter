import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiVal, setApiVal] = React.useState<string>('');
  const init = React.useCallback(async () => {
    try {
      const response = await fetch('/api/greeting');
      console.log(response);
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      setApiVal(body);
    } catch (e) {
      console.log('err', e);
    }
  }, [setApiVal]);

  React.useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>API returned: {JSON.stringify(apiVal)}</div>
      </header>
    </div>
  );
}

export default App;
