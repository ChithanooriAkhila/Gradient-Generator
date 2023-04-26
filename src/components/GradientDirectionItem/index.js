// Write your code here
import {ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, directionSelected, active} = props

  const {value, displayText} = gradientDetails

  const directionSelection = () => {
    directionSelected(value)
  }

  return (
    <li>
      <ButtonElement type="button" onClick={directionSelection} active={active}>
        {displayText}
      </ButtonElement>
    </li>
  )
}

export default GradientDirectionItem
