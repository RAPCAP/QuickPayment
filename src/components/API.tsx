import React, { useState } from 'react';
import {AnimationBody, AnimationLoading, CheckNumber, ButtonSend} from './styles/StyledComponents'
import './styles/App.css'


const KEY: string = 'D3Y0-YHO4-XFV3-WG5Q';  
const LOG: string = 'xjkemk1x';             // id ôóíêöèè îòâåòà ñåðâåðà (0\1)s 
const URL: string = 'https://randomapi.com/api/' + LOG + '?key=' + KEY

const API: React.FC = () => {
    // îòâåò ñåðâåðà 
    const [serverAnswer, ChangeServerAnswer]: any = useState(undefined);
    // àíèìàöèÿ çàãðóçêè
    const AnimLoading: JSX.Element = (<AnimationLoading> <AnimationBody></AnimationBody> </AnimationLoading >)
    // ïîñëå óäà÷íîãî îòâåòà îòïðàâëÿåò ïîëüõîâàòåëÿ íà äîìàøíþþ ñòðàíèöó
    const ToHome = (): void => { window.location.assign('http://localhost:3000/') };
    // ôóíêöèÿ çàïðîñà íà ñåðâåð
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
