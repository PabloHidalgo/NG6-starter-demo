import template from './button-enroll-counter.html';

export let buttonEnrollCounterComponent = {
	bindings: {
		//inputs
		enrolls: '<',
		enrolled: '<',

		//outputs
		onEnroll: '&'
	},
  template,
  controller: () => {},
};
