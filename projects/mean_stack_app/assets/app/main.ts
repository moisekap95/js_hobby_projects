// This is the first file that bundle.js executes
import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

// Start the angular app 
platformBrowserDynamic().bootstrapModule(AppModule);