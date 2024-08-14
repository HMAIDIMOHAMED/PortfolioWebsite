import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../models/project';
import { Tags } from '../../models/tags';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  project : Project = {
    id: 0,
    name: 'Blog Application',
    summary :'Un blog simple permettant d\'ajouter et de consulter des articles avec une interface intuitive.',
    description: '',
    projectLink: '',
    tags : [Tags.ANGULAR, Tags.TYPESCRIPT],
    pictures: []    
  }


  constructor(private titleService : Title)
  {
    this.titleService.setTitle('HMAIDI MOHAMED - Portfolio')
  }

}
