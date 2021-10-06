import styled,{css} from "styled-components";

const Button = styled.button`
color:white;
background: ${(props) => props.secondary?'black':'#FAC05E'};
font-weight: bold;
${props => props.large ? 
css`
padding: 16px;
border-radius: 8px;
font-size: 1.8em;


` :
css `
padding: 8px;
border-radius: 4px;
font-size: 1em;

`}



box-shadow:none;
border: none;
width :20%;
display: block;
white-space: none;
margin: 10px;
cursor: pointer;


&:disabled{
    background: #eee;
    color:#333;
    cursor:default;
}





`;

export default Button
