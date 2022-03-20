import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Personal from './personal';
import Projects from './projects';

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
		</Router>
	);
};

export default Pages;