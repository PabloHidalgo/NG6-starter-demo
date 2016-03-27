import template from './total-enrolls-counter.html';

class TotalEnrollsCounterController {
	calculateEnrollsCounter(courses) {
		return ( courses || [] ).filter((course) => {
			return course.enrolled;
		}).length;
	}
}

export let totalEnrollsCounterComponent = {
	bindings: {
		//inputs
		courses: '<'

		//outputs
	},
  template,
	controller: TotalEnrollsCounterController
};
