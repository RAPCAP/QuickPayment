import React, { useState } from 'react';
import {AnimationBody, AnimationLoading, CheckNumber, ButtonSend} from './styles/StyledComponents'
import './styles/App.css'


const KEY: string = 'D3Y0-YHO4-XFV3-WG5Q';  
const LOG: string = 'xjkemk1x';             // id ������� ������ ������� (0\1)s 
const URL: string = 'https://randomapi.com/api/' + LOG + '?key=' + KEY

const API: React.FC = () => {
    // ����� ������� 
    const [serverAnsver, ChangeServerAnsver]: any = useState(undefined);
    // �������� ��������
    const AnimLoading: JSX.Element = (<AnimationLoading> <AnimationBody></AnimationBody> </AnimationLoading >)
    // ����� �������� ������ ���������� ������������ �� �������� ��������
    const ToHome = (): void => { window.location.assign('http://localhost:3000/') };
    // ������� ������� �� ������
    const Request = async () => {
        ChangeServerAnsver("Loading");

        const api_url:   Response = await fetch(URL);
        const data1:     any      = await api_url.json();
        const resultAPI: Boolean  = (data1['results'] == 1);

        ChangeServerAnsver(resultAPI)    
        if (resultAPI) setTimeout(ToHome, 2500);
    }

    return (
        <div>
            <CheckNumber >
                {(serverAnsver == undefined) ? 'Please check if the data is correct and confirm' :
                 (serverAnsver == false)     ? 'ERROR! please try again' :
                 (serverAnsver == true)      ? 'THE PAYMENT IS COMPLETE' 
                                             :  AnimLoading}
            </CheckNumber>
            
            <ButtonSend onClick={Request}>
                CONFIRM
            </ButtonSend>
        </div>
    )
}

export default API
