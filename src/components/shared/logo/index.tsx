import { ReactChild } from 'react'
import styled from 'styled-components'

// components
import Cursor from 'components/shared/cursor'

function Logo({ children, ...rest }: { children: ReactChild }) {
    return <span {...rest}>{children} <Cursor /></span>
}

const StyledLogo = styled(Logo)`
    display: inline-grid;
    grid-auto-flow: column;
    gap: 0.25rem;
    font-size: 1.5rem;
    font-weight: bold;
    user-select: none;
    text-transform: lowercase;
`

export default StyledLogo