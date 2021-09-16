import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDocExampleModule, TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiGroupModule, TuiNotificationModule, TuiRootModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {ExampleComponent} from './example/example.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule.withServerTransition({appId: 'demo'}),
        BrowserAnimationsModule,
        TuiInputModule,
        TuiNotificationModule,
        TuiGroupModule,
        TuiRootModule,
        TuiDocExampleModule,
        TuiDocMainModule,
    ],
    declarations: [AppComponent, ExampleComponent],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    less: () => import('highlight.js/lib/languages/less'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
    ],
})
export class AppBrowserModule {}
