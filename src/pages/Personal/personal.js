import Layout from '../../components/layout/layout';
import ProfileHeader from '../../components/profileHeader';

const Personal = ({ profile }) => {
	return (
		<Layout>
			<ProfileHeader profile={profile} />
		</Layout>
	);
};

export default Personal;