import { Routes } from '@angular/router';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';

export const routes: Routes = [
    {
        path: "taskes",
        loadChildren: () => import("./tasks/task.routes").then((m) => m.TaskRoutes),
      }
];