import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MainListComponent } from '../../components/main-list/main-list.component';
import { ColorsListComponent } from '../../components/colors-list/colors-list.component';
import { AsyncPipe } from '@angular/common';

const COMPONENT_IMPORTS = [MainListComponent, ColorsListComponent];
const PIPE_IMPORTS = [AsyncPipe];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...COMPONENT_IMPORTS, ...PIPE_IMPORTS],
  template: `
    <div class="flex flex-col justify-between h-full w-full">
      <app-main-list />
      <app-colors-list />
    </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent { }
