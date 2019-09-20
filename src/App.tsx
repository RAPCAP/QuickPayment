import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Operators from './components/Operators'
import Form from './components/Form'
import './components/styles/App.css'
import { TopStyle, AppStyle } from './components/styles/StyledComponents'

const App: React.FC = () => {
    return (
        <div>
            <TopStyle>Quick payment</TopStyle>

            <AppStyle>
                <BrowserRouter>
                    <Route exact path='/' component={Operators} />
                    <Route path='/number' component={Form} />
                </BrowserRouter>
            </AppStyle>
        </div>
    );
}

export default App;
