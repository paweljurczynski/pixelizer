import '../scss/app.scss';
import './vendors/particles-header.js';
import 'fullpage.js';

// import particlesConfig from './vendors/particles.json';

import $ from 'jquery';

$(() => {
	// particlesJS('particles-js', particlesConfig);

	$('#fullpage').fullpage({
		anchors: ['WhoWeAre', 'Projects', 'OurClients', 'Contact']
	});
});