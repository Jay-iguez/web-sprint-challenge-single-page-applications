import { Link } from "react-router-dom";
import {StyledParentDiv, StyledBody, Image} from './styled'


export default function Submit() {

    return (
        <StyledParentDiv>
        <StyledBody>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/" className="link" id="header-Link">Home</Link>
          <Link to="" className="link" id="header-Link">Help</Link>
        </div>
      </StyledBody>
      <StyledBody>
        <div id="parent-Background">
            <h2>Thank you for your order!</h2>
        </div>
      </StyledBody>
      <Image>
        <div className="imageDiv">
             <img src="https://www.transwest.com/img/secure/vehicle_type/oB9jW5yju0ccohlOxMJbnz198XttL9UVU7mbVtwV.png?w=2000&fm=jpg&s=c8991d7fa5b64611391f0fedb92bc3f5" id="order"/>
        </div>
      </Image>
      <StyledBody>
        <div id="parent-Background">
            <h2>Your pizza is on the way - the estimated wait time is: {Math.floor(Math.random() * 1000)} Years.</h2>
        </div>
      </StyledBody>
      </StyledParentDiv>
    )
}