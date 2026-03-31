export class CreateTaskDto {
  title: string;
  description?: string;
  projectId: number;
  assigneeId?: number;
  dueDate?: string;
  status?: string;
  priority?: string;
}
