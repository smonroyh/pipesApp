import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [

      {
          label: 'Pipes en angular',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Basics',
                  icon: 'pi pi-bolt',
                  routerLink: '/'

              },
              {
                  label: 'numbers',
                  icon: 'pi pi-server',
                  routerLink: '/numbers'
              },
              {
                  label: 'uncommon',
                  icon: 'pi pi-pencil',
                  routerLink:'uncommon'
              },

          ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink:"custom"
            },

        ]
    },
  ]
  }
}
