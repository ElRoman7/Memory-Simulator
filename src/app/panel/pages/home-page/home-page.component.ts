import { Component } from '@angular/core';
import { MemoryPartitionService } from '../../../partition/services/partition.service';
import { MemoryPartition } from 'src/app/partition/interfaces/partition.interface';
import { ProcessService } from '../../../process/services/process.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  virtual : MemoryPartition[] = this.partitionService.virtualPart;
  fisical : MemoryPartition[] = this.partitionService.MemoryPart;

  processes = this.processService.processes;

  constructor(
    private partitionService:MemoryPartitionService,
    private processService: ProcessService,

    ){}
}
