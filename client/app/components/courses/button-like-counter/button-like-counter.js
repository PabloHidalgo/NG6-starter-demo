import template from './button-like-counter.html';

export let buttonLikeCounterComponent = {
	bindings: {
		//inputs
		likes: '<',
		liked: '<',

		//outputs
		onLike: '&'
	},
  template,
  controller: () => {},
};
