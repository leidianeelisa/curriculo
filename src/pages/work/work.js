import Layout from '../../components/layout/layout';
import { Paragraph, SectionTitle } from '../../styles';
import { JobTitle, WorkItem, WorkTitle } from './workStyles';

const Work = ({ profile }) => {
	return (
		<Layout>
			<div>
				<SectionTitle>Experiência Profissional</SectionTitle>
				<ul>
					{profile.work.map((work, index) => (
						<WorkItem key={index}>
							<WorkTitle>{work.position}</WorkTitle>
							<div>
								<JobTitle>{work.company}</JobTitle>
								<span>{work.location}</span>
								<p>
									{`${work.start.month}/${work.start.year}`} -  {' '}
									{work.end.year && work.end.month ? (
										`${work.end.month}/${work.end.year}`
									) : (
										<span>até o momento</span>
									)}
								</p>
							</div>
							<Paragraph>{work.summary}</Paragraph>
						</WorkItem>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default Work;