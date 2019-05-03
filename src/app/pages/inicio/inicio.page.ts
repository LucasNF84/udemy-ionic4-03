import { Component, OnInit } from '@angular/core';
import { Interface } from 'readline';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-on',
      name: 'botones y router',
      redirectTo: '/botones',
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'check',
      redirectTo: '/check',
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date-time',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

