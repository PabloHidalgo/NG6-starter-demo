import { ngmodule } from '../bootstrap/ngmodule';
import { coursesStates } from './courses.state';
import { coursesComponent } from './courses.component';

ngmodule.config(($stateProvider) => {
  'ngInject';

  coursesStates.forEach(state => $stateProvider.state(state));
})

.component('courses', coursesComponent);
