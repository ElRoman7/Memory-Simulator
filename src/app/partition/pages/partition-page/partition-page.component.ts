import { Component, OnInit } from '@angular/core';
import { MemoryPartition } from '../../interfaces/partition.interface';
import { MemoryPartitionService } from '../../services/partition.service';

@Component({
  templateUrl: './partition-page.component.html',
  styleUrls: ['./partition-page.component.scss']
})
export class PartitionPageComponent implements OnInit{
  memoryPartitions: MemoryPartition[] = [];
  virtualPartitions: MemoryPartition[] = this.partitionService.virtualPart

  constructor(private partitionService: MemoryPartitionService) {
    // Inicializa las particiones de memoria (si es necesario)
  }

  ngOnInit(): void {
    this.getMemoryPartitions()
  }

  // Resto del código del servicio...

  // Método para obtener una lista de todas las particiones de memoria
  getMemoryPartitions(): void {
    this.memoryPartitions = this.partitionService.getPartitions();
  }
}
