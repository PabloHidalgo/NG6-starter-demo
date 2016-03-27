import { ngmodule } from './bootstrap/ngmodule';

import { appComponent } from './app.component';

ngmodule.component('app', appComponent);

// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
ngmodule.config(['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise("/courses"); }]);
