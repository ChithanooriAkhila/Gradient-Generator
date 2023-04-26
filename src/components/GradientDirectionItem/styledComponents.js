// Style your elements here
import styled from 'styled-components'

export const ButtonElement = styled.button`
  background-color: ${props => (props.color ? props.color : '#ffffff')};
  opacity: ${props => (props.active ? 1 : 0.5)};
  padding: 10px;
  margin-right: 20px;
  color: black;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 20px;
`
