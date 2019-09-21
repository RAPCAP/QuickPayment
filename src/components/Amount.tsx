import React, { useState } from 'react';
import API from './API'
import './styles/App.css'
import { ErrorNumber, ButtonSend, Notification, Money, InputSum } from './styles/StyledComponents'


const Amount:React.FC = () => {

    const [valueInput,   ChangeValueInput]  = useState('');   // принимает значение формы
    const [errorInput,   ChangeErrorInput]  = useState(false);// ошибка ввода
    const [errorMaxSum, ChangeErrorMaxSum]  = useState(false);// ошибка максимальной суммы ввода 1000
    const [showPay,         ChangeShowPay]  = useState(false);// показывать окно оплаты
    const [extinction,   ChangeExtinction]  = useState(false);// используется для анимации исчезновения элементов

    const Change = (): void => ChangeShowPay(true)

    // использует ввод от пользователя и вносит в форму
    const onChange = (e:any): void => {
        ChangeErrorInput(false);
        ChangeValueInput(e.target.value);

        // проверка на условия максимальной суммы и длины числа и вывод ошибки
        if ((e.target.value > 1000) && (e.target.value.length >= 4)) {
            ChangeValueInput('1000');
            ChangeErrorMaxSum(true);
        }
    }

    // проверка после нажатия на кнопку
    const Validation = (): void => {
        ChangeErrorInput(false);

        if ((typeof +valueInput == 'number') && (+valueInput >= 1) ){
            ChangeExtinction(true);
            setTimeout(Change, 600);
        }
        else ChangeErrorInput(true);
    }

    return (
        <div >
            <div style={{ display: showPay ? 'block' : 'none' }}>
                <Money>
                    {valueInput} RUB
                </Money>

                <API />
            </div>

            <div
                style={{ display: showPay ? 'none' : 'block' }}
                className={ extinction ? 'extinction' : ''}>

                <Notification>
                    Enter the needed amount of money to pay
                </Notification>

                <Notification className={errorMaxSum ? 'Max' : ''}>
                    The maximum amount is 1000 RUB
                </Notification>

                <InputSum
                    maxLength={4}
                    value={valueInput}
                    onChange={onChange}
                    placeholder='500' />
                <br />

                <ButtonSend
                    onClick={Validation}>
                   {(+valueInput > 1) ? ('Pay:' + valueInput + ' RUB') : 'Write the needed amount'}
                </ButtonSend>

                <ErrorNumber style={{ display: errorInput ? 'block' : 'none' }}>
                      ERROR: Enter number!
                </ErrorNumber>
            </div>
        </div>
    )
}

export default Amount;
