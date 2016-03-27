import template from './app-header.html';

export let appHeaderComponent = {
	bindings: {
		//inputs

		//outputs
	},
  template,
	controller() {
    'ngInject';

		const $ctrl = this;

		$ctrl.$onInit = () => {
			$ctrl.menuItems = [
				{ name: 'All Courses', icon: '', sref: 'courses' },
				{ name: 'Top Favourites', icon: 'thumb_up', sref: 'courses-top-favourites' },
				{ name: 'Top Enrollments', icon: '', sref: 'courses-top-enrollments' },
				{ name: 'My Favourites', icon: 'turned_in', sref: 'courses-my-favourites' },
				{ name: 'My Enrollments', icon: '', sref: 'courses-my-enrollments' },
				{ name: 'About', icon: '', sref: 'about' },
			];
		}
  }
};
