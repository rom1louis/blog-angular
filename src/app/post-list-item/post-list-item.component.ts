import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

// objet post : chaque post est constitué
//              -> d'un titre
//              -> d'un contenu
//              -> d'un total de like/dislike
//              -> d'une date de création
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  

  constructor() { }

  ngOnInit() {
  }


  
// retourne la couleur du texte affiché suivant que le post soit liké ou non
  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    } else {
	  return 'black';
	}
  }
  
// Fonction lorsqu'on l'on clique sur un like
  onLike() {
    this.loveIts ++;
	}
	
// Fonction lorsqu'on l'on clique sur le bouton "Don't like it!"
  onDislike() {
    this.loveIts --;
	}
}