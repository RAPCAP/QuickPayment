import React from 'react';
import { imgBeeline, imgMegafon, imgMts } from './Handler'
import './styles/App.css'
import { BigTextStyle, ButtonOperator} from './styles/StyledComponents'


const Operators: React.FC = () => {
    var selectedOperator: string | undefined = undefined


    function SelectedMts(e: any): void {
        selectedOperator = 'mts'
        Next()
    }

    function SelectedMegafon(e: any): void {
        selectedOperator = 'megafon'
        Next()
    }

    function SelectedBeeline (e:any): void {
        selectedOperator = 'beeline'
        Next()
    }


    function Next(): void {
        window.location.assign('http://localhost:3000/number' + '/' + selectedOperator);
    }


    return (
        <div>
            <BigTextStyle>
                Please choose your operator
            </BigTextStyle>


            <ButtonOperator onClick={SelectedBeeline}>
                {imgBeeline}
            </ButtonOperator>

            <ButtonOperator onClick={SelectedMts}>
                {imgMts}
            </ButtonOperator>

            <ButtonOperator onClick={SelectedMegafon}>
                {imgMegafon}
            </ButtonOperator>
        </div>
    )
}

export default Operators;

