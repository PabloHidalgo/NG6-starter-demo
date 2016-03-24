import template from './course-card.html';

class CourseCardController {
	$onInit() {
		console.log('CourseCardController:vm$onInit');
		console.log(this.course);
	}

	onEnroll() {
		console.log('CourseCardController::onEnroll');
	};

	onLike() {
		console.log('CourseCardController::onLike');
	}
}

export let courseCardComponent = {
	bindings: {
		//inputs
		course: '<'

		//outputs
	},
  template,
  controller: CourseCardController,
};
