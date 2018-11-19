import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  dateTest = new Date();
  
  posts = [
	{
	  title : 'angularJS ',
	  content : "AngularJS est un framework JavaScript libre et open source développé par Google. Il permet de développer des pages web. ",
	  loveIts : 3,
	  created_at : 'Feb 02, 2018'
	},
	{
	  title : "Swift ",
	  content : "Swift est un langage de programmation compilé multi-paradigmes développé par la société Apple. Il est destiné à la programmation d'applications sur les systèmes d'exploitation iOS, macOS, watchOS, tvOS ainsi que Linux. ",
	  loveIts : -3,
	  created_at : 'Jun 15, 2015'
	},
	{
	  title : "langage C ",
	  content : "C est un langage de programmation impératif généraliste. Inventé au début des années 1970 pour réécrire UNIX, C est devenu un des langages les plus utilisés ",
	  loveIts : 0,
	  created_at : this.dateTest
	}
  ];

}
