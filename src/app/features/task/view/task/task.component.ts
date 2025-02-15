import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InclusionFormComponent } from '../../components/inclusion-form/inclusion-form.component';

const COMPONENT_IMPORTS = [InclusionFormComponent];

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [...COMPONENT_IMPORTS],
  template: `
    <div class="flex flex-col mx-10">
      <span class="font-bold text-4xl">Meu quadro de tarefas</span>
      <app-inclusion-form />
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent { }
