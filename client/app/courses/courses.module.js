import { ngmodule } from '../bootstrap/ngmodule';
import { coursesState } from './courses.state';

ngmodule.config(($stateProvider) => {
  "ngInject";
  const coursesStates = [coursesState];
  coursesStates.forEach(state => $stateProvider.state(state));
});
