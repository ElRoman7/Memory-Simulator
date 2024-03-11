import { Component, Input } from '@angular/core';
import { MemoryPartition } from '../../interfaces/partition.interface';
import { MemoryPartitionService } from '../../services/partition.service';

@Component({
  selector: 'partition-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public partition!: MemoryPartition

  ngOnInit(): void {
    if(!this.partition) throw Error('Process property is required')
  }
  constructor(private partitionService: MemoryPartitionService) {}
}
