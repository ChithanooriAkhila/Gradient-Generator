import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {GradientContainer, GradientDirectionList} from './styledComponents'
import {ButtonElement} from '../GradientDirectionItem/styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    colour1: '#8ae323',
    colour2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  directionSelected = direction => {
    this.setState({direction})
  }

  changeFirstColor = event => {
    this.setState({colour1: event.target.value})
  }

  changeSecondColor = event => {
    this.setState({colour2: event.target.value})
  }

  generateGradient = () => {
    const {colour1, colour2, direction} = this.state
    this.setState({
      gradientValue: `to ${direction}, ${colour1}, ${colour2}`,
    })
  }

  render() {
    const {colour1, colour2, direction, gradientValue} = this.state
    return (
      <GradientContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <GradientDirectionList>
          {gradientDirectionsList.map(gradient => (
            <GradientDirectionItem
              gradientDetails={gradient}
              key={gradient.directionId}
              directionSelected={this.directionSelected}
              active={gradient.value === direction}
            />
          ))}
        </GradientDirectionList>
        <p>Pick the Colors</p>
        <div>
          <div>
            <p>{colour1}</p>
            <input
              value={colour1}
              type="color"
              onChange={this.changeFirstColor}
            />
          </div>
          <div>
            <p>{colour2}</p>
            <input
              value={colour2}
              type="color"
              onChange={this.changeSecondColor}
            />
          </div>
        </div>
        <ButtonElement
          type="button"
          color="#00c9b7"
          onClick={this.generateGradient}
          active
        >
          Generate
        </ButtonElement>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
