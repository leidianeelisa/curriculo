import React from 'react';

import { SectionTitle } from '../../styles';
import { Header, HeaderContainer, Image, SubHeaderText } from './profileHeaderStyles';

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
						{profile.basics.region}
					</b>
          <p>
						{profile.basics.headline}
					</p>
          <b>
            {profile.basics.yearsOfExperience} anos de experiência como desenvolvedora.
          </b>
				</div>
			</Header>
		</HeaderContainer>
	);
};

export default ProfileHeader;