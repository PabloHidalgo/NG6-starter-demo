import template from './course-gallery.html';

class CourseGalleryController {
	$onInit () {
		console.log('CourseGalleryController::$onInit');
		console.log(this.courses);
	}
}

export let courseGalleryComponent = {
	bindings: {
		//inputs
		courses: '<'

		//outputs
	},
  template,
  controller: CourseGalleryController,
};
