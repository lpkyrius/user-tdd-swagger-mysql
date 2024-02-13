import { expect, describe, jest, test, beforeAll } from '@jest/globals';
import { TasksRepositoryInMemory } from './tasks/TaskRepositoryInMemory';
import { TaskRepositoryInPostgres } from '../postgres/tasks/TaskRepositoryInPostgres';
import { ITaskRepository } from '../ITaskRepository';

describe('#taskService', () => {

  // to enable/disable one specific test (in memory or postgres) 
  // just comment the correspondent line withing the repositories object below
  const repositories: Record<string, string> = { 
    inmemory: 'InMemory', 
    // database: 'Postgres' 
  };

  for (const property in repositories) {

      let tasksRepository: ITaskRepository;

        // run tests twice, on for InMemory and one for Postgres
        beforeAll(() => {
          if (repositories[property] == 'InMemory'){
            tasksRepository = new TasksRepositoryInMemory();
          } else {
            tasksRepository = new TaskRepositoryInPostgres();
          }
        });

        describe.skip('#Find Task by Id', () => {
          it(`should throw an error if the task ID is not found - ${ repositories[property] }`, async () => { 
              try {
                await tasksRepository.findTaskById('this.id.should.not.exist');
              } catch (error: any) {
                expect(error.message).toBe('Id not found');
              }
            });
        });

        describe.skip('#Delete Tasks', () => {
          it(`should return false when deleting a non-existing task on RepositoryInMemory - ${ repositories[property] }`, async () => {
            const testDel = async function () {
              return await tasksRepository.delete('this.id.should.not.exist');
            }
            expect(await testDel()).toBeFalsy();
          });
        });

  }

});