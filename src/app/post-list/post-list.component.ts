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
	  title : 'titre 1 ',
	  content : "contenu du titre 1 ",
	  loveIts : 3,
	  created_at : 'Feb 02, 2018'
	},
	{
	  title : "titre 2 ",
	  content : "contenu du titre 2 ",
	  loveIts : -3,
	  created_at : 'Jun 15, 2015'
	},
	{
	  title : "titre 3 ",
	  content : "contenu du titre 3 ",
	  loveIts : 0,
	  created_at : this.dateTest
	}
  ];

}
