import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  findAll() {
    return [];
  }

  findOne(id: number) {
    return null;
  }

  create(dto: CreateProjectDto) {
    return null;
  }

  update(id: number, dto: UpdateProjectDto) {
    return null;
  }

  remove(id: number) {
    return null;
  }
}
