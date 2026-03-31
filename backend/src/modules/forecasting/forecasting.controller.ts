import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ForecastingService } from './forecasting.service';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';

@Controller('forecasting')
export class ForecastingController {
  constructor(private readonly forecastingService: ForecastingService) {}

  @Get('project/:projectId')
  getForecastByProject(@Param('projectId') projectId: string) {
    return this.forecastingService.getForecastByProject(+projectId);
  }

  @Post()
  create(@Body() dto: CreateForecastDto) {
    return this.forecastingService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateForecastDto) {
    return this.forecastingService.update(+id, dto);
  }
}
