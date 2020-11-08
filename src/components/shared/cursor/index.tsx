import { forwardRef } from 'react'
import styled, { keyframes } from 'styled-components'

function Cursor(props: CursorProps) {
  return <span {...props} />
}

const blink = keyframes`
    from, to {
        background-color: transparent;
    }
    50% {
        background-color: var(--soul-black);
    }
`

const StyledCursor = styled(Cursor)`
  display: block;
  height: 100%;
  width: 1rem;
  background-color: var(--soul-black);
  animation: 1s ${blink} step-end infinite;
`

export default StyledCursor
