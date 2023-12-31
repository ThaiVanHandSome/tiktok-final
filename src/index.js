import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from '~/components/GlobalStyle';
import LoginProvider from './Context/loginContext';
import AuthProvider from './Context/authContext';
import LearnMoreProvider from './Context/learnMoreContext';
import BoxProvider from './Context/boxContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BoxProvider>
            <LoginProvider>
                <GlobalStyle>
                    <App />
                </GlobalStyle>
            </LoginProvider>
        </BoxProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
