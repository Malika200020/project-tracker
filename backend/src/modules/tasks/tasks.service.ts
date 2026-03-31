import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  findAll() {
    return [];
  }

  findByProject(projectId: number) {
    return [];
  }

  findOne(id: number) {
    return null;
  }

  create(dto: CreateTaskDto) {
    return null;
  }

  update(id: number, dto: UpdateTaskDto) {
    return null;
  }

  remove(id: number) {
    return null;
  }
}
