import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../../service/projects.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
 
  projects ={} as Project[];

  constructor(private titleService : Title, private projectService : ProjectsService)
  {
    this.titleService.setTitle('HMAIDI MOHAMED - Portfolio')
  }

  ngOnInit(){
  this.getProjects();

  }

  getProjects(){
    this.projects=this.projectService.getProjects();
  }


}
