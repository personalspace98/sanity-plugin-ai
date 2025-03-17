import styled, {keyframes} from 'styled-components'

const glow = (color: string) => keyframes`
  0% {
    box-shadow: 0 0 5px ${color}80;
  }
  100% {
    box-shadow: 0 0 20px ${color};
  }
`
export const GlowingDiv = styled.div<{borderColor: string}>`
  padding: 4px;
  border: 2px solid ${({borderColor}) => borderColor};
  border-radius: 10px;
  animation: ${({borderColor}) => glow(borderColor)} 1.5s infinite alternate;
  width: 100%;
`
