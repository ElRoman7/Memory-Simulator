import { Component } from '@angular/core';

interface MenuItem{
  title: string,
  route: string
}

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  public reactiveMenu: MenuItem[] = [
    {title: 'Panel', route: '/panel'},
    {title: 'Procesos', route: '/process'},
    {title: 'Particiones', route: '/partition'},
  ];
}
