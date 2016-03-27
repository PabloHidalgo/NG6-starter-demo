import template from './total-like-counter.html';

class TotalLikeCounterController {
	calculateLikeCounter(courses) {
		return ( courses || [] ).filter((course) => {
			return course.liked;
		}).length;
	}
}

export let totalLikeCounterComponent = {
	bindings: {
		//inputs
		courses: '<'

		//outputs
	},
  template,
	controller: TotalLikeCounterController
};
