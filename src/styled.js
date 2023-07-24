import styled from 'styled-components'

export const StyledParentDiv = styled.div`
font-family: 'Space Grotesk';
height: 100vh;
border-left: .5rem solid  #ff8f57 ;

h1 {
    font-size: 2.8rem;
    border-right: .5rem solid  #575eff ;
}

h2 {
    font-size: 2rem;
    border-left: .5rem solid  #ff686f ;
}
`

export const StyledBodyHeader = styled.div`
display: flex;
justify-content: space-between;
margin: 1rem 2rem;
`

export default {
    StyledBodyHeader,
    StyledParentDiv
}