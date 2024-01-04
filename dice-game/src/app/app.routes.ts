import { Routes } from '@angular/router';
import { PlayersFormComponent } from './players-form/players-form.component';
import { GameComponent } from '../game/game.component';

export const routes: Routes = [
    {
        path: 'playersForm',
        component: PlayersFormComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
];