import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryComponent } from '../../features/category/view/category/category.component';
import { TaskComponent } from '../../features/task/view/task/task.component';
import { MatDividerModule } from '@angular/material/divider';

const COMPONENT_IMPORTS = [CategoryComponent, TaskComponent];
const MODULE_IMPORTS = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENT_IMPORTS, ...MODULE_IMPORTS],
  template: `
    <div class="h-screen flex w-full">
      <!-- Categories -->
      <app-category class="w-1/4" />
      <!-- Divisor -->
      <mat-divider class="h-full opacity-50" vertical />
      <!-- Tasks -->
      <app-task class="w-3/4 pt-10" />
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { }
