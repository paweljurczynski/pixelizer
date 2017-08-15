import '../scss/app.scss';
import './vendors/particles-header.js';
import 'fullpage.js';

// import particlesConfig from './vendors/particles.json';

import $ from 'jquery';

let navigation = null;

$(() => {
	navigation = $('.navigation--right');

	$('#fullpage').fullpage({
		anchors: ['Home','WhoWeAre', 'WhatWeDo', 'Projects', 'OurClients', 'Contact'],
		afterLoad
	});
});

function afterLoad(anchor) {
	navigation.attr('class', `navigation navigation--right ${anchor}`);
}