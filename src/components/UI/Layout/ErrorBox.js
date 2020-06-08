import React from 'react';
import styled from 'styled-components';
import errorImg from '../../../assets/close.png';

const Icon = styled.div`
  color: none;
  height: 5%;
  width:5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 10px auto;
   
  background-image: url('../../../assets/close.png');
  background-size: cover;
`;

const ErrorDiv = styled.div`
    background:${props=> props.theme.color.errorLight};
    color: ${props=> props.theme.color.greyDark};
    font-size: ${props => props.theme.fontSize.small};
    padding: 8px;
    border: 1px solid ${props => props.theme.color.error};
`;

const ErrorBox = props => <ErrorDiv><Icon/>{props.children}</ErrorDiv>;

export default ErrorBox;