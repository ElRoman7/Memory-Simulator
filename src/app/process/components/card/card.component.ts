import { Component, Input, OnInit } from '@angular/core';
import { Process } from '../../interfaces/process.interface';
import { ProcessService } from '../../services/process.service';
import { MemoryPartitionService } from 'src/app/partition/services/partition.service';

@Component({
  selector: 'process-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input()
  public process!: Process

  ngOnInit(): void {
    if(!this.process) throw Error('Process property is required')
  }
  constructor(private processService: ProcessService, private partitionService : MemoryPartitionService) {}

  onDelete(): void {
    if (this.process) {
      const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar el proceso "${this.process.name}"?`);
      if (confirmDelete) {
        this.processService.deleteProcess(this.process.pid);
      }
    }
  }

}
