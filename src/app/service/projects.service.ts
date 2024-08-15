import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tags } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Blog Application',
      summary: 'Un blog simple permettant d\'ajouter et de consulter des articles avec une interface intuitive.',
      description: '',
      projectLink: 'https://github.com/HMAIDIMOHAMED/BlogApplication',
      tags: [Tags.ANGULAR, Tags.TYPESCRIPT],
      pictures: []
    },
    {
      id: 2,
      name: 'Product Management',
      summary: 'Gestion des produits avec consultation par les utilisateurs et CRUD par les administrateurs.',
      description: '',
      projectLink: 'https://github.com/HMAIDIMOHAMED/ProductManagement',
      tags: [Tags.ANGULAR, Tags.JAVA],
      pictures: []
    },
    {
      id: 3,
      name: 'Topic CRUD',
      summary: 'Application pour la gestion des sujets avec création, modification, suppression et consultation.',
      description: '',
      projectLink: 'https://github.com/HMAIDIMOHAMED/TopicCrud',
      tags: [Tags.ANGULAR, Tags.JAVA],
      pictures: []
    },
    {
      id :4,
      name: 'API Test',
      summary:'Test des API avec Express.js',
      description:'',
      projectLink:'https://github.com/HMAIDIMOHAMED/Express-JS',
      tags: [Tags.NODEJS, Tags.EXPRESS],
      pictures: []
    },
    {
      id: 5,
      name: 'Parking Management',
      summary: 'Système de gestion de parking utilisant Python pour gérer les réservations, l’occupation des places, et les paiements.',
      description: '',
      projectLink: 'https://github.com/HMAIDIMOHAMED/PFA-Project',
      tags: [Tags.PYTHON],
      pictures: []
    },
    {
      id: 6,
      name: 'Travel Management',
      summary: 'Application de gestion de voyages avec React et Java pour planifier et réserver des voyages, gérer les itinéraires et les réservations.',
      description: '',
      projectLink: 'https://github.com/HMAIDIMOHAMED/EMSIAIR',
      tags: [Tags.REACT, Tags.JAVA],
      pictures: []
    }

  ];

  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectById(id : number) : Project{
    let project = this.projects.find(project => project.id === id);
    if (project === undefined){
      throw new TypeError("There is no project that matches the id :" +id);
    }
    return project;

  }

}
