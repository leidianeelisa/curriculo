import { User32 } from '@carbon/icons-react';
import { SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CustomSideNavItems, StyledSideNav } from './sideBarStyles';


const menuItems = [
	{ name: 'Personal', path: '/', icon: User32 },
	{ name: 'Personal', path: '/', icon: User32 }
];

const SideBar = () => {
	// useLocation retorna o objeto que representa a URL atual
	const location = useLocation();

	return (
		<StyledSideNav expanded={false} isChildOfHeader={false} aria-label="Side navigation">
			<CustomSideNavItems>
				{menuItems.map(i => (
					<SideNavLink
						renderIcon={i.icon}
						isActive={location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path}
						element={Link}
						to={i.path}
						key={i.name}
					>
						{i.name}
					</SideNavLink>
				))}
			</CustomSideNavItems>
		</StyledSideNav>
	);
};

export default SideBar;