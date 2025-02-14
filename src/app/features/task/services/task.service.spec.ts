import { provideHttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { task, tasks } from '../../../../__mocks__/task';

describe('TaskService', () => {
  let taskService: TaskService;
  let httpTestingController: HttpTestingController;
  const MOCKED_TASKS = tasks;
  const MOCKED_TASK = task;
  const apiUrl = 'http://localhost:3000';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    taskService = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('creates service', () => {
    expect(taskService).toBeTruthy();
  });
  it('getSortedTasks', () => {
    const sortedTasks = taskService.getSortedTasks(tasks);
    expect(sortedTasks[0].title).toEqual('Comprar pão');
  });
  describe('getTasks', () => {
    it('should return a list of tasks', waitForAsync(() => {
      taskService.getTasks().subscribe(response => {
        expect(response).toEqual(MOCKED_TASKS);
        expect(taskService.tasks()).toEqual(MOCKED_TASKS);
      });
      const req = httpTestingController.expectOne(`${apiUrl}/tasks`);
      req.flush(MOCKED_TASKS);
      expect(req.request.method).toEqual('GET');
    }));
  });
});