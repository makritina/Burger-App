import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
color:#fff

&:hover{
  color: #59C4C6 !important;
}
@media screen and (max-width:960px){
    &:hover{
        color:#A4DFE0;
      }
}
@media screen and (min-width:960.5px){
    &:hover{
        color:#C13730;
      }
}

`;

export default StyledLink;