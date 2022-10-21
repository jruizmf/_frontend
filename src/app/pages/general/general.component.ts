import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  cardItems:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cardItems = [
      {
        order:1, 
        title: "Chat",
        description: "Comunicate con tu organización o estrecha lazos creando grupos entre organizaciones",
        url:"/chat",
        icon:"./../../../assets/icons/chat-icon.svg"
      },
      {
        order:2, 
        title: "Rutas",
        description: "Monitorea las rutas de las organizaciones que no se pierda alguno.",
        url:"/route",
        icon:"./../../../assets/icons/route-icon.svg"
      },
      {
        order:3, 
        title: "Mi Grupo",
        description: "Visualiza tu grupo así como eventos, miembros, circulares.",
        url:"/chat",
        icon:"./../../../assets/icons/motorcycle-icon.svg"
      },{
        order:4, 
        title: "General",
        description: "Comunicate con tu organización o estrecha lazos creando grupos entre organizaciones.",
        url:"/general",
        icon:"./../../../assets/icons/group-icon.svg"
      },{
        order:5, 
        title: "Calendario",
        description: "Revisa el calendario de eventos de tu organización u otras organizaciones.",
        url:"/calendar",
        icon:"./../../../assets/icons/calendar-icon.svg"
      }
    ]
  }

}
