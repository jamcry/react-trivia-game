import styled from "styled-components";

const CenteredFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(CenteredFlexDiv)`
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  background: #333;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CenteredIcon = styled(CenteredFlexDiv)`
  width: 128px;
  height: 128px;
  border: 1px solid #333;
  background: rgba(0,0,0,.15);
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.4rem;
  margin: .4rem;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  transition: .3s ease-out;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = styled(Button)`
  padding: 0.4rem 2.5rem;
  background: rgba(18,133,153, .75);
  color: white;
  border: none;
  letter-spacing: 2px;
  &:hover {
    background: rgba(18,133,153, 1);
  }
`;

const AnswerButton = styled(Button)`
  width: 400px;
  margin: .4rem 0;
  border: 0;
  background: #999;
  color: white;
  border-bottom: 3px solid #666;
  &:hover {
    background: #DE6D1D;
    border-color: #9B4C14;
  }
  &:active {
    background: #DEAE1D;
    border-color: #C49404;
    box-shadow: inset 0 0 10px #B38807;
  }
`;

const Text = styled.div`
  line-height: 1.7rem;
  font-size: 16px;
  font-weight: ${props => props.bold && "bold"};
  color: ${props => props.color};
  font-size: ${props => props.big && "36px"};
`;

export {
  CenteredFlexDiv,
  Container,
  Header,
  CenteredIcon,
  Button,
  ActionButton,
  AnswerButton,
  Text
};