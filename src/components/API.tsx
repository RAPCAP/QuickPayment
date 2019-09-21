import React, { useState } from 'react';
import {AnimationBody, AnimationLoading, CheckNumber, ButtonSend} from './styles/StyledComponents'
import './styles/App.css'


const KEY: string = 'D3Y0-YHO4-XFV3-WG5Q';  
const LOG: string = 'xjkemk1x';             // id функции которая отвечает '1' или '0' 50%\50%
const URL: string = 'https://randomapi.com/api/' + LOG + '?key=' + KEY

const API: React.FC = () => {
    // ответ сервера
    const [serverAnswer, ChangeServerAnswer]: any = useState(undefined);
    // показывать анимацию ожидания ответа сервера 
    const AnimLoading: JSX.Element = (<AnimationLoading> <AnimationBody></AnimationBody> </AnimationLoading >)
    // функция отправки пользователя на главную страницу
    const ToHome = (): void => { window.location.assign('http://localhost:3000/') };
    // запрос на сервер
    const Request = async () => {
        ChangeServerAnswer("Loading");

        const api_url:   Response = await fetch(URL);
        const data1:     any      = await api_url.json();
        const resultAPI: Boolean  = (data1['results'] == 1);

        ChangeServerAnswer(resultAPI)    
        if (resultAPI) setTimeout(ToHome, 2500);
    }

    return (
        <div>
            <CheckNumber >
                {(serverAnswer == undefined) ? 'Please check if the data is correct and confirm' :
                 (serverAnswer == false)     ? 'ERROR! please try again' :
                 (serverAnswer == true)      ? 'THE PAYMENT IS COMPLETE' 
                                             :  AnimLoading}
            </CheckNumber>
            
            <ButtonSend onClick={Request}>
                CONFIRM
            </ButtonSend>
        </div>
    )
}

export default API
