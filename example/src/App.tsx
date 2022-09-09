import './App.css';

// import { openUrl } from 'mitools';

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
    </div>
  );
}

export default App;
