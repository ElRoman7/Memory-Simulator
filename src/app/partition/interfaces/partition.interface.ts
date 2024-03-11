
export interface MemoryPartition {
  id: number;
  size: number;
  allocated: boolean;
  processId?: number; // Nuevo campo para mantener una referencia al proceso asignado
  availableSize?: number;
}


