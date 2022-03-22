import Layout from '../../components/layout/layout';
import ProfileHeader from '../../components/profileHeader';
import { Paragraph, Pill, SectionTitle } from '../../styles';

const Personal = ({ profile }) => {
	return (
		<Layout>
			<ProfileHeader profile={profile} />
			<div>
				<SectionTitle>Sobre Mim</SectionTitle>
				<Paragraph>{profile.basics.summary}</Paragraph>
			</div>
			<div>
				<SectionTitle>Conhecimentos</SectionTitle>
				<div>
					{profile.skills.map(skill => (
						<Pill key={skill.name}>{skill.name}</Pill>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Personal;