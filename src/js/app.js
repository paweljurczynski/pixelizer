import '../scss/app.scss';
import './vendors/particles-header.js';
import 'fullpage.js';

// import particlesConfig from './vendors/particles.json';

import $ from 'jquery';

$(() => {
	$('#fullpage').fullpage({
		anchors: ['Home','WhoWeAre', 'Projects', 'OurClients', 'Contact']
	});
});