import styled from 'styled-components'

export const Button = styled.button`
  background-color:blue;
  color: white;
  width: 100%;
  padding:10px;
  border-radius:7px;
  margin-block:10px;
`
export const TextButton = styled.button`
  color: blue;
  font-weight: 600;
`

export const AppContainer = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
  color: black;
  text-align: start;
  font-size: 30px;
  margin-block: 5px;
`

export const FormWraper = styled.div`
width:500px;
margin:auto;
box-shadow:0px 0px 15px 10px rgba(0, 0, 0, 0.1);
padding:20px;
border-radius:7px;
text-align:start;
`

export const Label = styled.p`
color:${props => props.color};
text-align:start;
`

export const OtpInput = styled.input`
width:50px;
height: 50px;
border-radius:7px;
margin:5px;
text-align:center;
border:${props=>props.border?props.border:'2px solid gray'}
`



export const Input = styled.input`
    width:100%;
    border-radius:7px;
    margin-block:5px;
    padding:10px ;
    border:${props=>props.border?props.border:'2px solid gray'}
`

export const Div = styled.div`
    position:relative;
`
export const FlexDiv = styled.div`
    position:relative;
    display: flex;
    align-items : center;
`
export const Font = styled.i`
    position: absolute;
    right: 5%;
    cursor: pointer;
`