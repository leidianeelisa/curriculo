import { InlineNotification } from 'carbon-components-react';

import Layout from '../../components/layout/layout';
import { Pill, SectionTitle } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './projectsStyles';

const Projects = ({ profile }) => {
	return (
		<Layout>
			<InlineNotification
        hideCloseButton={false}
        iconDescription="Fechar notificação"
        kind="warning"
        notificationType="inline"
        role="alert"
        subtitle={
          <span>
            Área em construção, estão apresentados aqui os projetos de meu{' '}
            <a href="https://www.github.com/leidianeelisa">Github</a>
          </span>
        }
        title="Atenção"
      />
			 <div>
        <SectionTitle>Projetos Privados</SectionTitle>
        <ul>
					{console.log(profile)}
          {profile.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
		</Layout>
	);
};

export default Projects;