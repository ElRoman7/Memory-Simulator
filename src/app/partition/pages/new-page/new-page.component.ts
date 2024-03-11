import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcessService } from 'src/app/process/services/process.service';
import { MemoryPartitionService } from '../../services/partition.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit{
  partitionForm!: FormGroup;
  processName: string = '';
  processSize: number = 0;

  constructor(private processService: ProcessService, private partitionService: MemoryPartitionService,private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.partitionForm = this.formBuilder.group({
      partitionId: [null, Validators.required],
      partitionSize: [null, Validators.required]
    });
  }

  onSave():void{
    if(this.partitionForm.valid){
      const {partitionId, partitionSize }= this.partitionForm.value;
      this.partitionService.createPartition(partitionId, partitionSize);
      this.asignPartition();
      this.partitionForm.reset();
      this.router.navigateByUrl('/partition')
    }
  }

  asignPartition(): void {
    const processes = this.processService.getprocesses();
    for (const process of processes) {
      // Verifica si el proceso ya está asignado a una partición
      if (process.partitionId === undefined) {

        const availablePartition = this.partitionService.getAvailablePartition(process.size);
        console.log("Particion Disponible",availablePartition);

        // Verifica si hay una partición disponible que tenga suficiente espacio para el proceso
        if (availablePartition && availablePartition.size >= process.size) {

          // Asigna la partición al proceso
          this.partitionService.assignPartition(availablePartition.id, process.pid);
          this.processService.assignProcess(process.pid, availablePartition.id)

          return; // Sale del bucle después de asignar la partición al proceso
        }
      }
    }

    console.error('No hay procesos disponibles para asignar a la particion.');
  }

}
