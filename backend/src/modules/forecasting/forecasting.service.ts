import { Injectable } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';

@Injectable()
export class ForecastingService {
  getForecastByProject(projectId: number) {
    return null;
  }

  create(dto: CreateForecastDto) {
    return null;
  }

  update(id: number, dto: UpdateForecastDto) {
    return null;
  }
}
