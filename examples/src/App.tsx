import './App.css';

import { openUrl, telTo } from 'mitools';

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          openUrl('https://baidu.com');
        }}
      >
        点击我打开百度
      </button>
      <button
        onClick={() => {
          telTo('186XXXX0887');
        }}
      >
        点击我打电话
      </button>
    </div>
  );
}

export default App;
