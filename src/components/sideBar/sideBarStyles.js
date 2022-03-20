import { SideNav, SideNavItems } from 'carbon-components-react/lib/components/UIShell';
import styled from 'styled-components';

export const StyledSideNav = styled(SideNav)`

  svg {
    fill: #b7b7b7 !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
`;

export const CustomSideNavItems = styled(SideNavItems)`
  width: auto !important;
  height: 5rem !important;

  &:hover {
    width: auto !important;
    height: 5rem !important;
  }

  a.bx--side-nav__link--current::before {
    background-color: #f1c21b;
  }
`;
