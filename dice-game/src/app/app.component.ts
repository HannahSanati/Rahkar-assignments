import { Component } from '@angular/core';
import { PlayersFormComponent } from './players-form/players-form.component';
import { GameComponent } from "../game/game.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [PlayersFormComponent, GameComponent]
})
export class AppComponent {

}
