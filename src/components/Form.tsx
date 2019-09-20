import React, { useState, Dispatch } from 'react';
import { imgMts, imgBeeline, imgMegafon } from './Handler'
import { BrowserRouter, Route } from 'react-router-dom'
import InputElement from 'react-input-mask';
import Amount from './Amount'
import { ErrorNumber, FormTel, ButtonSend, CheckBanner, CheckNumber } from './styles/StyledComponents'
import './styles/App.css'

const Form: React.FC = () => {
    // показывает выбраного оператора изходя из ссылки
    const ImgBeeline = (): JSX.Element => { return (<div>{imgBeeline}</div>) }
    const ImgMts     = (): JSX.Element => { return (<div>{imgMts}</div>) }
    const ImgMegafon = (): JSX.Element => { return (<div>{imgMegafon}</div>) }
    
    const [valueInput,         ChangeValueInput] = useState('');   // значение введенное в поле
    const [errorInput,         ChangeErrorInput] = useState(false);// ошибка при вводе
    const [displayFormTel, ChangeDisplayFormTel] = useState(true); // показывать поле ввода телефона
    const [formAnim,             ChangeFormAnim] = useState(false);// показывать анимацию снижения поля

    const Change = (): void => ChangeDisplayFormTel(false) // выполняется с задержкой

    // отображает то что ввел пользователь в стоку и помещает это в хук
    const HandleChangeValueInput = (e: any): void => {
        ChangeErrorInput(false);
        ChangeValueInput(e.target.value);
    }

    // проверка номера перебирая каждый символ через масив
    const Validation = (e: any): void => {
        const onlyNumbers: string[] = valueInput.split('').filter(number => ((+number > 0) || (number === '0')))

        if (onlyNumbers.length == 11 && onlyNumbers[1] == '9') {
            ChangeFormAnim(true)
            setTimeout(Change, 1000)
        }
        else ChangeErrorInput(true);
    }
    return (
        <FormTel>
            <CheckBanner>
                <BrowserRouter>
                    <Route path='/number/beeline' component={ImgBeeline} />
                    <Route path='/number/mts'     component={ImgMts} />
                    <Route path='/number/megafon' component={ImgMegafon} />
                </BrowserRouter>

                <CheckNumber >
                    {displayFormTel ? 'Enter your phone nubmer' : `Your number: ${valueInput}`}
                </CheckNumber>
            </CheckBanner>

            <div style={{ display: displayFormTel ? 'none' : 'block' }}>
                <Amount />
            </div>

            <div
                className={ formAnim ? 'FormPostAnim' : ''}
                style={{ display: displayFormTel ? 'block' : 'none' }}>

                <InputElement
                    onChange={HandleChangeValueInput}
                    value={valueInput}
                    className="numberinput"
                    mask="+7 (999) 999-99-99"
                    placeholder='+7 901 012 3456' />
                <br />
                <ButtonSend onClick={Validation} >
                    CONFIRM
                </ButtonSend>
            </div>

                <ErrorNumber style={{ display: errorInput ? 'block' : 'none' }}>
                    THE NUMBER IS NOT CORRECT
                </ErrorNumber>
        </FormTel>
    )
}
   
export default Form;