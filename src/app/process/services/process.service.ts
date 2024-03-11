import { Injectable } from '@angular/core';
import { Process } from '../interfaces/process.interface';
import { MemoryPartitionService } from 'src/app/partition/services/partition.service';

@Injectable({providedIn: 'root'})
export class ProcessService {
  constructor(private partitionService: MemoryPartitionService) { }

  private _processes: Process[] = [
    // {pid: 1, name: 'Proceso 1', size: 50},
    // {pid: 2, name: 'Proceso 2', size: 50},
  ];

  createProcess(name: string, size: number): void {
    const process: Process = { pid: this._processes.length + 1, name, size };
    // Verifica si hay suficiente memoria disponible para asignar el proceso
    const availablePartition = this.partitionService.getAvailablePartition(size);
    this._processes.push(process);

    if (availablePartition) {
      // Asigna el proceso a la partición encontrada

      this.partitionService.assignPartition(availablePartition.id, process.pid);
      this.assignProcess(process.pid, availablePartition.id)
      // console.log(`Proceso "${name}" asignado a la partición ${availablePartition.id}.`);
    } else {
      console.log(`No hay suficiente memoria para asignar el proceso "${name}".`);
      // Aquí puedes manejar el caso en el que no hay suficiente memoria disponible
    }


  }

  readProcess(pid: number): Process | null {
    return this._processes.find(process => process.pid === pid) || null;
  }

  assignProcess(pid: number,partitionId: number ){
    const process = this._processes.find(process => process.pid === pid);
    console.log(process);

    if (process && !process.partitionId) {
      process.partitionId = partitionId;
      console.log('Processo asignado a la particion ', partitionId)
      return true;
    }
    console.log('Error al asignar particion ', partitionId)
    return false;
  }

  updateProcess(pid: number, name?: string, size?: number): boolean {
    const process = this.readProcess(pid);
    if (process) {
      if (name !== undefined) process.name = name;
      if (size !== undefined) process.size = size;
      return true;
    }
    return false;
  }

  deleteProcess(pid: number): boolean {
    const index = this._processes.findIndex(process => process.pid === pid);
    if (index !== -1) {
      this._processes.splice(index, 1);
      const deletedProcess = this._processes[index];
      if (deletedProcess.partitionId !== undefined) {
        this.partitionService.unassignPartition(deletedProcess.partitionId);
      }

      return true;
    }
    return false;
  }

  get processes(): Process[] {
    return this._processes;
  }

  getprocesses(): Process[]{
    return this._processes;
  }
}
