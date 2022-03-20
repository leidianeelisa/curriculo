import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Education from './education';
import Personal from './personal';
import Projects from './projects';
import Work from './work';

const Pages = ({ profile }) => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={ <Personal profile={profile} />}>
				</Route>
			</Routes>
			<Routes>
				<Route path="/projetos" element={ <Projects profile={profile} />}>
				</Route>
			</Routes>
			<Routes>
				<Route path="/experiencia-profissional" element={ <Work profile={profile} />}>
				</Route>
			</Routes>
			<Routes>
				<Route path="/formacao-academica" element={ <Education profile={profile} />}>
				</Route>
			</Routes>
		</Router>
	);
};

export default Pages;