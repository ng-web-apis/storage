import {default as example1Ts} from '!!raw-loader!./example/example.component.ts';
import {default as example1Html} from '!!raw-loader!./example/example.template.html';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly example = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}
