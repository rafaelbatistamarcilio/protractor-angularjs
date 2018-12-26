
import * as angular from 'angular';

import '@babel/plugin-transform-runtime';
import '@babel/plugin-syntax-dynamic-import';

import 'angular-ui-router';
import 'oclazyload';

import {AppModule} from './app/app.module';

angular.element(document).ready( ()=> angular.bootstrap(document, [AppModule.name]) );