import React from 'react';

import { SectionTitle } from '../../styles';
import { Header, HeaderContainer, Image, Name, ProfileLink, SubHeaderText } from './profileHeaderStyles';

const ProfileHeader = ({ profile }) => {
	return (
		<HeaderContainer>
			<Header>
				<Image src={profile.basics.picture} />
				<div>
					<Name>
						{profile.basics.name}
					</Name>
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
			<div>
        <SectionTitle>Perfis</SectionTitle>
        <ul>
          {profile.basics.profiles.map((data, i) => (
            <ProfileLink key={data.network}>
              {i !== 0 && ' | '}
              <a href={data.url} target="_blank" rel="noreferrer noopener">
                {data.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
		</HeaderContainer>
	);
};

export default ProfileHeader;