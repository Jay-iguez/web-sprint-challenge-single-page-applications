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
    background-color: rgba( 230, 213, 213, 0.9);
}
`

export const StyledBody = styled.div`
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

#order-pizza {
    background-color: rgba(159, 243, 170, 0.3);
    font-style: italic;
    padding: .5rem;
    color: #b0ffff ;
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

// APPJS Specific

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

// FORMJS Specific

export const FormDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin: 0 auto;
width: 75vw;
background-color: rgba( 220, 205, 205, 0.9);
text-align: center;
}

label {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    font-size: 2rem;
}

#text {
    input {
        text-align: center;
        font-size: 1.2rem;
    }
}

#size-dropdown {
    font-size: 1.2rem;
    option {
        text-align: center;
        font-size: 1.2rem;
    }
}

#selecttop {
    diplay: flex;
    justify-content: space-between;
    input {
        width: 1.2rem;
    }
}

#pizza-form {
    width: 65%;
}

`

export const InnerFormDiv = styled.div`
width: 100%;
margin: 0 auto;
border-bottom: .5rem solid  #faffaf ;

h1 {
    text-align: center;
}

#pizza-image {
    background-image: url("https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg");
    padding-top: 40rem;
    background-repeat: no-repeat;
    background-size: cover;
}

button {
    font-size: 1.2rem;
    padding: 1rem;
}

#submit {
    font-size: 1.2rem;
    padding: 1rem;
    background-color: white;
    border: 1px solid black;
    color: black;
    text-decoration: none;
}
`


export default {
    StyledBody,
    StyledParentDiv,
    ImageDiv,
    ContentDiv,
    FormDiv,
    InnerFormDiv
}