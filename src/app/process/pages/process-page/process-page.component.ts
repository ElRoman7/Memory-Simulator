import { Component } from '@angular/core';
import { ProcessService } from '../../services/process.service';
import { Process } from '../../interfaces/process.interface';
import { Router } from '@angular/router';

@Component({
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.scss']
})
export class ProcessPageComponent {



  name : string = '';
  size : number = 0;

  processes = this.processService.processes


  constructor(private processService : ProcessService) {}




}
