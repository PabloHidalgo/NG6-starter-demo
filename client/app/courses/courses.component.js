const template = `
  <h1 style="text-align: center;">{{$ctrl.title}}</h1>

  <course-gallery
    layout="row" layout-wrap
    courses="$ctrl.courses">
  </course-gallery>`;

export let coursesComponent = {
	bindings: {
		//inputs
    title: '<',
    courses: '<'

		//outputs
	},
  template,
  controller: () => {},
};
