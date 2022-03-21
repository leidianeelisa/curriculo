import Layout from '../../components/layout/layout';
import { Paragraph, SectionTitle } from '../../styles';
import { Degree, EducationItem, Institution } from './educationStyles';

const Education = ({ profile }) => {
	return (
		<Layout>
			<div>
        <SectionTitle>Formação Acadêmica</SectionTitle>
        <ul>
          {profile.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <p>
                {education.start.year}
                {education.start.year ? ' - ' + education.end.year : ''}
                </p>
              </div>
              {console.log(profile)}
              <Paragraph>{education.website}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
		</Layout>
	);
};

export default Education;