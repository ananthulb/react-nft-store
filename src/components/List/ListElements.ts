import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaEdit } from "react-icons/fa";

export const Container = styled.div`
min-height:692px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background: linear-gradient(108deg, rgb(59 167 165) 0%, rgb(144 99 255) 100%);
`;

export const ListWrap = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width: 400px) {
    // height:80%;
}
`;

export const Icon = styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
color:#fff;
font-weight:700;
font-size:32px;

@media screen and (max-width: 480px) {
    margin-left:16px;
    margin-top:8px;
}
`;

export const ListContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width: 480px) {
    padding:10px;
}
`;

export const Table = styled.div`
background: #010101;
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:40px 32px;
border-radius:4px;
box-shadow:0px 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px) {
    padding:32px 32px;
}
`;

export const ListH1 = styled.h1`
margin-bottom:10px;
margin-top:20px;
color:#fff;
font-size:20px;
font-weight:400;
text-align:center;
`;

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:#fff;
`;

export const FormInput = styled.input`
padding:16px 16px;
margin-bottom:32px;
border:none;
border-radius:4px;
`;

export const FormButton = styled.button`
background: #9063FF;
padding:16px 0px;
border:none;
border-radius:4px;
color:#fff;
font-size:20px;
curson:pointer;
`;

export const Text = styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;
`;


export const ListContainer = styled.ul`
height: 300px;
overflow: auto;
@media screen and (max-width: 400px) {
    height:230px;
}
`;

export const Form = styled.form`
background: #010101;
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:80px 32px;
border-radius:4px;
box-shadow:0px 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px) {
    padding:32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom:40px;
color:#fff;
font-size:20px;
font-weight:400;
text-align:center;

@media screen and (max-width: 400px) {
    margin-bottom:10px !important ;
}
`;

export const CloseIcon = styled(FaEdit)`
    color:#fff;
`;

export const Edit = styled.div`
background: transparent;
cursor: pointer;
outline: none;
padding-left: 10px;
`;


export const ListElements = styled.li`
list-style: none;
  display: flex;
  align-items: center;
  /* width: 50rem; */
  margin: 0rem auto;
  border: 0.1rem solid rgba(0, 0, 0, 0.233);
  padding: 1rem;
  justify-content: space-between;
`;

export const ListTitleSection = styled.div`
  display: flex;
  align-items: center;
`;
export const ListTitle = styled.h2`
  display: flex;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 400;
`;