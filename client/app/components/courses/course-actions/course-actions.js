import template from './course-actions.html';

class CourseActionsController {
	toggleEnrollCourse(course) {
		console.log('CourseActionsController::toggleEnrollCourse');
		console.log(course);
		// datacontext.courses.enroll(course.id).then(function() {
		// 	return vm.onEnroll();
		// });
	}

	toggleLikeCourse(course) {
		console.log('CourseActionsController::toggleLikeCourse');
		console.log(course);
		// datacontext.courses.like(course.id).then(function() {
		// 	return vm.onLike();
		// });
	}
}

export let courseActionsComponent = {
	bindings: {
		//inputs
		course: '<',

		//outputs
		onEnroll: '&',
		onLike: '&'
	},
  template,
  controller: CourseActionsController
};
