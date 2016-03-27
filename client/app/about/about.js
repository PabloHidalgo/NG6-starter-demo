import aboutComponent from './about.component';
import { ngmodule } from '../bootstrap/ngmodule';

ngmodule.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
})

.component('about', aboutComponent);
