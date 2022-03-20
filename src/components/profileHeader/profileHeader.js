import React from 'react';

import { SectionTitle } from '../../styles';
import { Header, HeaderContainer } from './profileHeaderStyles';

const ProfileHeader = ({ profile }) => {
	return (
		<HeaderContainer>
			<Header>
				<Image src={profile.basics.picture} />
				<div>
					<SectionTitle>
						{profile.basics.name}
					</SectionTitle>
					<SubHeaderText>
						{profile.basics.label}
					</SubHeaderText>
					<b>
						{user.basics.region}
					</b>
          <p>
						{user.basics.headline}
					</p>
          <b>
            {user.basics.yearsOfExperience} anos de experiência como desenvolvedora.
          </b>
				</div>
			</Header>
		</HeaderContainer>
	);
};

export default ProfileHeader;