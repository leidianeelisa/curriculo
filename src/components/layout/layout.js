import SideBar from '../sideBar';
import { StyledContent } from './layoutStyles';

const Layout = ({ children }) => {
	return (
		<>
			<SideBar />
			<StyledContent>
				<div>{children}</div>
			</StyledContent>
		</>
	);
};
export default Layout;