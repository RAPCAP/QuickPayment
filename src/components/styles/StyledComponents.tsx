import styled , { keyframes } from 'styled-components';


const shadow =     `box-shadow:  7px 8px 4px 7px rgba(0,0,0, 0.20);`
const shadowAnim = `box-shadow: 10px 9px 7px 8px rgba(0,0,0, 0.17);
    transform: scale(1.05);
`

const Appearance = keyframes`
    from { opacity: 0 };
    to   { opacity: 1 };
`

// App //

export const TopStyle = styled.div`
    background-color: #826DB2;
    width: 100%;
    box-sizing: border-box;
    height: 2em;
    line-height: 2em;
    font-weight:bold; 

    font-family: 'GrundschriftRegular'; 
    text-align: center;
    font-size: 2.1rem;
	font-stretch: ultra-expanded;

    text-shadow:
         #A9A2A9  1px  1px 0,
         #A9A2A9 -1px -1px 0, 
         #A9A2A9 -1px  1px 0, 
         #A9A2A9  1px -1px 0;
	@media (min-width: 3000px) {
		 font-size: 3.6rem;

}
`
	////////	
export const AppStyle = styled.div`
    width:1000px;
    margin:auto;

    font-family: 'PoppinsRegular'; 
    font-weight: bold; 
    font-weight: normal; 
    font-style:  normal; 

	@media (min-width: 530px) and (max-width: 1000px) {
		width:500px;

	}
	@media (max-width: 530px) {
        font-size: 0.7rem;
		width:100%;
	}
	@media (min-width: 3000px) {
		width:1500px;
	}
`

// Operators //

export const BigTextStyle = styled.h1`
    font-size: 2.4rem;
    padding: 3rem;
    color: #182F80
    font-family: 'PoppinsRegular'; 
	@media (max-width: 370px) {
        font-size: 1.8rem;
	}

`
export const ButtonOperator = styled.button`
    border-radius:50px;
    background-color:#A9A2A9;
    outline: 0 !important;

    width:  90px;
    heigth: 90px;
    border:  0px;
    padding: 0px;
    margin: 10px;
	@media (max-width: 330px) {
		margin: 5px;
	}

`

// Form //

export const ErrorNumber = styled.div`
    padding-top:30px;
    transition-duration: 1s;

    font-size:1.6rem;
	color: #FF4A00;
    text-shadow: 
        black  1px  1px 0, 
        black -1px -1px 0, 
        black -1px  1px 0, 
        black  1px -1px 0;
`

export const FormTel = styled.div`
    animation-name: ${Appearance};
    animation-duration: 2s;
`


export const ButtonSend = styled.button`
    outline: 0;
    outline-offset: 0;
    background-color: #5F5082;

    height:50px;    
    margin: auto;
    margin-top:15px;
    width: 180px;

    border-radius:150px;
    border-color:#2B243B;

    font-family: 'SpaceMeatballRegular'; 
    font-weight: normal; 
    font-style: normal;
    color:#FFB121

	${shadow}

	transition: 0.4s;
    &:hover  { ${shadowAnim}}

	@media (min-width: 3000px) {
		font-size:2rem;
		height:120px;    
	    margin-top:35px;
		width:300px;


`


export const CheckBanner = styled.div`
    background-color:#A9A2A9;
    height:170px;
    width:500px;

    margin:auto;
    margin-top:30px;
    margin-bottom:40px;
    padding-top:30px;

	border-radius:25px;
    border: 3mm ridge #937FF3 ;

	${shadow}
    
	transition: 0.4s;
    &:hover  { ${shadowAnim}}
	
	@media (max-width: 600px) {
		width:290px;
		border: 2mm ridge #937FF3 ;
	}  
	@media (min-width: 3000px) {
		width:1400px;
		height:300px;
		border: 5mm ridge #937FF3 ;
		margin-top:70px;
		margin-bottom:80px;
	}

	@media (max-height: 600px) {
        margin-top:10px;
        margin-bottom:10px;
        padding-top:10px;
	}
`


export const CheckNumber = styled.div`
    animation-name: ${Appearance};
    animation-duration: 2s;
	height:50px;

    font-family: 'TruenoRegular'; 
    font-size: 1.5rem;

	@media (min-width: 3000px) {
		font-size:3rem;
`

// Amount //

export const Notification = styled.h2`
    animation-name: ${Appearance};
    animation-duration: 1s;

	@media (max-width: 600px) {
		font-size:0.9rem;
`


export const Money = styled.div`
    background-color: #4DA053;
    width: 300px;

    margin: auto;
    margin-bottom:60px;

    border: 2px solid #1F681F ;
    border-radius: 5px;

    font-size: 2.5rem;
    font-family: 'BeonRegular';
	${shadow}
    
	transition: 0.4s;
    &:hover  { ${shadowAnim}}

    animation-name: ${Appearance};
    animation-duration: 0.6s;

	@media (max-height: 600px) {
        margin-bottom:20px;

	}

`

export const InputSum = styled.input`
    outline: 0;
    outline-offset: 0;
    background-color: #FFF0E4;
    width: 530px;

    padding-bottom: 1.2rem;
    padding-top: 1.2rem;
    padding-right: 0px;
    padding-left: 0px;
    margin: auto;

    border-radius: 100px;
    border: 0px;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.9rem;

	${shadow}

    transition: 0.4s;
    &:hover  { ${shadowAnim} }

	@media (max-width: 600px) {
		width:300px;
	}

	@media (max-height: 600px) {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;

	}

	
`

// API //

const slide = keyframes`  
  from { margin-left: 0 }
    to { margin-left: -100% } 
`

export const AnimationBody = styled.div`
    height: 50px;
    width: 800px;

    animation: ${slide} 5s linear infinite;

    background: repeating-linear-gradient(45deg, rgba(255,255,255,0.9) 0,
        rgba(255,255,255,0.9) 5px, transparent 10px, transparent 5px );
`

export const AnimationLoading = styled.div`
    width: 400px;
    height: 50px;
    background: #999;
    margin: auto;

    border: 3px solid #fff;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
`


