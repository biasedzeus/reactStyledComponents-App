import styled from "styled-components";

const Button = styled.button`
color:white;
background: #FAC05E;
font-weight: bold;
padding: 8px;
border-radius: 4px;
box-shadow:none;
font-size: 1em;
border: none;
width :20%;
display: block;
white-space: none;


&::disabled{
    background: #eee;
    color:#333
}



`;

export default Button
