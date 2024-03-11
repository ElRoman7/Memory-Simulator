import { Injectable } from '@angular/core';
import { MemoryPartition } from '../interfaces/partition.interface';

@Injectable({
  providedIn: 'root'
})
export class MemoryPartitionService {
  public _partitions: MemoryPartition[] = [
    {id: 1, size: 512, allocated: false},
    {id: 2, size: 512, allocated: false},
    {id: 3, size: 512, allocated: false},
    {id: 4, size: 512, allocated: false},
    {id: 5, size: 512, allocated: false},
    {id: 6, size: 512, allocated: false},
    {id: 7, size: 512, allocated: false},
    {id: 8, size: 512, allocated: false},
  ];

  public _virtualPartitions: MemoryPartition[] = [
    {id: 1, size: 512, allocated: false},
    {id: 2, size: 512, allocated: false},
    {id: 3, size: 512, allocated: false},
    {id: 4, size: 512, allocated: false}
  ];

  constructor() { }

  get virtualPart(){
   return this._virtualPartitions;
  }

  get MemoryPart(){
    return this._partitions;
   }

  createPartition(id: number, size: number): void {
    const partition: MemoryPartition = { id, size, allocated: false };
    this._partitions.push(partition);
  }

  getPartitions(): MemoryPartition[] {
    return this._partitions;
  }

  unassignPartition(partitionId: number): void {
    const partitionIndex = this._partitions.findIndex(partition => partition.id === partitionId);
    if (partitionIndex !== -1) {
      // Encuentra la partición por su ID y actualiza el estado 'allocated' a false
      this._partitions[partitionIndex].allocated = false;
    } else {
      console.error(`No se encontró ninguna partición con el ID ${partitionId}.`);
    }
  }


  getAvailablePartition(processSize: number): MemoryPartition | null {
    // Busca la primera partición no asignada que tenga suficiente espacio
    return this._partitions.find(partition => !partition.allocated && partition.size >= processSize) || null;
  }

  assignPartition(partitionId: number, processId: number): boolean {
    const partition = this._partitions.find(partition => partition.id === partitionId);
    if (partition && !partition.allocated) {
      partition.allocated = true;
      partition.processId = processId;

      return true;
    }
    return false;
  }

  releasePartition(partitionId: number): boolean {
    const partitionIndex = this._partitions.findIndex(partition => partition.id === partitionId);
    if (partitionIndex !== -1) {
      this._partitions[partitionIndex].allocated = false;
      delete this._partitions[partitionIndex].processId;
      return true;
    }
    return false;
  }
}
