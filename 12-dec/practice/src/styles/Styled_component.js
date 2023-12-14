import styled from 'styled-components';

export const Button = styled.button`
  background-color:${(props)=>props.backgroundcolor?props.backgroundcolor:'blue'};
  color: white;
  cursor: pointer;
  width: ${(props)=>props.width?props.width:'100%'};
  padding:10px;
  border-radius:7px;
  margin:10px;
`
export const TextButton = styled.button`
  color: blue;
  font-weight: 600;
  border: none;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
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
export const BigTitle = styled.h1`
  color: red;
  text-align: center;
  font-size: 40px;
  margin-block: 10px;
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
margin-block: 5px;
padding-inline: 5px;
color:${props => props.color};
width: ${props=>props.width?props.width:'full'};
margin-left:${props=>props.marleft?props.marleft:''};
font-weight:bold;
text-align:start;
`

export const CheckRow = styled.div`
margin-block: 5px;
display: flex;
justify-content: flex-start;
gap: 13px;

`

export const CheckItems = styled.span`
margin-block: 5px;
display: flex;
`

export const LabelFor = styled.label`
color:${props => props.color};
font-size: 13px;
display: inline-block;
text-align:start;
`
export const RowError = styled.div`
display: flex;
justify-content: start;
`
export const SelectAll = styled.input`
display: flex;
justify-content: space-around;
`

export const OtpInput = styled.input`
width:50px;
height: 50px;
border-radius:7px;
margin:5px;
text-align:center;
border:${props=>props.border?props.border:'2px solid gray'};

`


export const Input = styled.input`
    width:95%;
    border-radius:7px;
    margin-block:5px;
    padding:10px ;
    border:${props=>props.border?props.border:'2px solid gray'};
    &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Select = styled.select`
    width:95%;
    border-radius:7px;
    margin-block:5px;
    padding:10px ;
    border:${props=>props.border?props.border:'2px solid gray'};
    /* &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
`

export const Div = styled.div`
    position:relative;
    margin-inline: 5px;
    width:${(props)=>props.width?props.width:''}
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
export const Container = styled.div`
    width: 90%;
    height: 90%;
    padding: 10px;
`

export const Row  = styled.div`
    padding-block: 5px;
    margin-block: 5px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-between;
`

export const Table  = styled.table`
position: relative;
width: 100%;
`

export const Tr  = styled.tr`
position: relative;
cursor: ${(props)=>props.cursor?props.cursor:''};
`

export const Thead  = styled.thead`
position: relative;
`

export const Tbody  = styled.tbody`
position: relative;
`

export const Td  = styled.td`
padding: 5px 10px;
position: relative;
border-bottom: 1px solid #d3d3d3;
background-color: #f2f2f2;
`

export const Th  = styled.th`
position: relative;
text-align: start;
background-color: #d3d3d3;
padding: 5px 10px;
`

