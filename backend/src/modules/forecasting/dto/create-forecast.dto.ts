export class CreateForecastDto {
  projectId: number;
  estimatedCompletionDate?: string;
  confidence?: number;
  notes?: string;
}
