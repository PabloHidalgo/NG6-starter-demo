import { ngmodule } from '../bootstrap/ngmodule';

import { appFooterComponent } from './app-footer/app-footer.js';
import { appHeaderComponent } from './app-header/app-header.js';

import { buttonEnrollCounterComponent } from './button-enroll-counter/button-enroll-counter.js';
import { buttonLikeCounterComponent } from './button-like-counter/button-like-counter.js';

import { totalEnrollsCounterComponent } from './total-enrolls-counter/total-enrolls-counter.js';
import { totalLikeCounterComponent } from './total-like-counter/total-like-counter.js';

import { courseActionsComponent } from './courses/course-actions/course-actions.js';
import { courseCardComponent } from './courses/course-card/course-card.js';
import { courseGalleryComponent } from './courses/course-gallery/course-gallery.js';


ngmodule
.component('appFooter', appFooterComponent)
.component('appHeader', appHeaderComponent)
.component('buttonEnrollCounter', buttonEnrollCounterComponent)
.component('buttonLikeCounter', buttonLikeCounterComponent)
.component('courseActions', courseActionsComponent)
.component('courseCard', courseCardComponent)
.component('courseGallery', courseGalleryComponent)
.component('totalEnrollsCounter', totalEnrollsCounterComponent)
.component('totalLikeCounter', totalLikeCounterComponent);
