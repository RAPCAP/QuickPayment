import React, { useState, Dispatch } from 'react';
import { imgMts, imgBeeline, imgMegafon } from './Handler'
import { BrowserRouter, Route } from 'react-router-dom'
import InputElement from 'react-input-mask';
import Amount from './Amount'
import { ErrorNumber, FormTel, ButtonSend, CheckBanner, CheckNumber } from './styles/StyledComponents'
import './styles/App.css'

const Form: React.FC = () => {
    // картинка выбранного оператора
    const ImgBeeline = (): JSX.Element => { return (<div>{imgBeeline}</div>) }
    const ImgMts     = (): JSX.Element => { return (<div>{imgMts}</div>) }
    const ImgMegafon = (): JSX.Element => { return (<div>{imgMegafon}</div>) }
    
    const [valueInput,         ChangeValueInput] = useState('');   // значение ввода
    const [errorInput,         ChangeErrorInput] = useState(false);// ошибка ввода
    const [displayFormTel, ChangeDisplayFormTel] = useState(true); // покаывать форму ввода телефона иначе показывает ввод суммы
    const [formAnim,             ChangeFormAnim] = useState(false);// активация анимации

    const Change = (): void => ChangeDisplayFormTel(false)

    // вносит ввод пользователь в форму 
    const HandleChangeValueInput = (e: any): void => {
        ChangeErrorInput(false);
        ChangeValueInput(e.target.value);
    }

    // проверка на верность номера после нажатия кнопки
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
