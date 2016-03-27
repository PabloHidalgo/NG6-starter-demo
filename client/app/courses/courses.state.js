export let coursesStates = [{
  name: 'courses',
  url: '/courses',
  component: 'courses',
  resolve: {
    title: () => {
      return 'COURSES LIST';
    },
    courses: () => {
      return [];
    }
  },
},
{
  name: 'courses-top-favourites',
  url: '/courses/top-favourites',
  component: 'courses',
  resolve: {
    title: () => {
      return 'COURSES TOP FAVOURITES';
    },
    courses: () => {
      return [];
    }
  },
},
{
  name: 'courses-top-enrollments',
  url: '/courses/top-enrollments',
  component: 'courses',
  resolve: {
    title: () => {
      return 'COURSES TOP ENROLLMENTS';
    },
    courses: () => {
      return [];
    }
  },
},
{
  name: 'courses-my-favourites',
  url: '/courses/my-favourites',
  component: 'courses',
  resolve: {
    title: () => {
      return 'MY FAVOURITES COURSES';
    },
    courses: () => {
      return [];
    }
  },
},
{
  name: 'courses-my-enrollments',
  url: '/courses/my-enrollments',
  component: 'courses',
  resolve: {
    title: () => {
      return 'COURSES I\'M ENROLLED IN';
    },
    courses: () => {
      return [];
    }
  },
}];
