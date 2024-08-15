import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../models/project';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  featuredProject = {} as Project;
  constructor(private titleService : Title,private projectsService: ProjectsService)
  {
    this.titleService.setTitle('HMAIDI MOHAMED - Home')
  }

  ngOnInit(){
    this.getProjectById();

  }

  getProjectById(){
    this.featuredProject=this.projectsService.getProjectById(2);
  }

}
