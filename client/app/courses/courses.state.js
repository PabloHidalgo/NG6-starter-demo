export const coursesState = {
  name: 'courses',
  url: '/courses',
  controller: function() {},
  template: `
    <h1 style="text-align: center;">{{$resolve.title}}</h1>

    <course-gallery
    	layout="row" layout-wrap
    	courses="$resolve.courses">
    </course-gallery>`,
  resolve: {
    title: function() {
      return 'COURSES TOP FAVOURITES';
    },
    courses: function() {
      return [];
    }
  },
};
