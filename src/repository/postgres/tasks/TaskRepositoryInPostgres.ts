import crypto from 'crypto';
import * as fs from 'fs';
import { ManageTaskTestFile } from '../../in-memory/tasks/ManageTaskTestFile';

import { Task } from "../../../entities/Task";
import { ITaskRepository } from "../../ITaskRepository";
import { db } from '../../../services/postgres/postgres';

class TaskRepositoryInPostgres implements ITaskRepository {

  private readonly filePath: string;
  
  constructor() {
    const manageTaskTestFile = new ManageTaskTestFile();
    this.filePath = manageTaskTestFile.getFile();
  }

  async add(task: Task): Promise<Task> {
    try {
      const newTask: Task = { ...task, id: crypto.randomUUID(), created_at: new Date(new Date().toISOString()) };
      const savedTask = await db('maintenance_task')
          .insert({
            id: newTask.id,
            user_id: newTask.userId,
            summary: newTask.summary,
            created_at: newTask.created_at 
          })
          .returning('*');
          
      return savedTask[0];  
            
    } catch (error) {
        console.log(`Error in addTask(): ${error}`);
        throw error;
    }
  }

  async update(task: Task): Promise<Task> {
    // const tasks = this.readTasksFromFile();
    // const index = tasks.findIndex((t) => t.id === task.id);
    // if (index !== -1) {
    //   tasks[index] = task;
    //   this.writeTasksToFile(tasks);
    //   return task;
    // }
    // throw new Error('task not found');

    return task;
  }

  async delete(id: string): Promise<boolean> {
    // const tasks = this.readTasksFromFile();
    // const initialLength = tasks.length;
    // const filteredTasks = tasks.filter((t) => t.id !== id);
    // if (filteredTasks.length !== initialLength) {
    //   this.writeTasksToFile(filteredTasks);
    //   return true;
    // }
    return false;
  }

  async exists(id: string): Promise<boolean> {
    try {
      const recoveredData = await db('maintenance_task')
          .select('*')
          .from('maintenance_task')
          .where({ id })

      if (!recoveredData.length)
        return false;

      return true;
    } catch (error) {
        console.log(`Error in exists(): ${ error }`)
        throw error;
    }
  }

  async list(): Promise<Task[]> {
    try {
      const recoveredData = await db('maintenance_task')
      .select('*').from('maintenance_task');
      return recoveredData;
  } catch (error) {
      console.log(`Error in list(): ${ error }`)
      throw error;
  }
  }

  async findTaskById(id: string): Promise<Task> {
    try {
      const recoveredData = await db('maintenance_task')
          .select('*')
          .from('maintenance_task')
          .where({ id })

          if (!recoveredData.length)
            throw new Error('Id not found');
      
        return recoveredData[0];
    } catch (error) {
        console.log(`Error in findTaskById(): ${ error }`)
        throw error;
    }
  }

  private readTasksFromFile(): Task[] {
    const fileData = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(fileData);
  }

  private writeTasksToFile(tasks: Task[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2));
  }
}

export { TaskRepositoryInPostgres };
