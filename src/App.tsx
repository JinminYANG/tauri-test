import React from 'react';
import logo from './logo.svg';
import './App.css';

import {invoke} from '@tauri-apps/api';

function App() {
    // 이제 명령을 호출해 봅시다!
    // 앱 배경을 우클릭하고 개발자 도구를 엽니다.
    // "Hello, World!"가 콘솔에 출력되는 걸 볼 수 있습니다!
    invoke('greet', {name: 'World'})
        // `invoke`는 Promise를 반환합니다.
        .then((response) => console.log(response))


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
