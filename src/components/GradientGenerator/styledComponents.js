// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  padding: 50px;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
