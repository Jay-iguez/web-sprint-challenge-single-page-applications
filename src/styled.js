import styled from 'styled-components'

export const StyledParentDiv = styled.div`
font-family: 'Space Grotesk';
height: 100vh;
border-left: .5rem solid  #ff8f57 ;

h1 {
    font-size: 3.5rem;
    border-right: .5rem solid  #575eff ;
}

h2 {
    font-size: 2.5rem;
    border-left: .5rem solid  #ff686f ;
}

#parent-Background {
    background-color: rgba(181, 189, 182, 0.9);
}
`

export const StyledBodyHeader = styled.div`
display: flex;
justify-content: space-between;
margin: 1rem 2rem;

.link {
    font-size: 3rem;
    margin: 2rem .5rem;
    color: white;
    text-decoration: none;
    border-right: .5rem solid  #92f784 ;
}

#header-Link {
    color: black;
}

#photo-Link {
    background-color: rgba(159, 243, 170, 0.3);
}

#header-Photo {
    background-image: url("https://schaeffers-cdn.s3.amazonaws.com/images/default-source/schaeffers-cdn-images/default-images/sectors/andrew-seaman-sqopsb2k0cu-unsplash.jpg?sfvrsn=c55d806_4");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 30rem; 
    width: 100vw;
    color: white ;

    #header-Photo-Text {
        width: 25%;
    }
   
}
`

export const ContentDiv = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 2rem;
`

export const ImageDiv = styled.div`
margin: 2rem 3rem;
border-right: .5rem solid  #575eff ;
img {
    width: 40rem;
    height: 30rem;
}
font-size: 1.3rem;
`

export default {
    StyledBodyHeader,
    StyledParentDiv,
    ImageDiv,
    ContentDiv
}