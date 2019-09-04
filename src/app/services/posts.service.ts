import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts : Post [] = [
    {
      title: 'Mon premier post',
      content: 'Est carnifex nam fuere calamitatum altae quidem peremptae conplures permissa flagitiis hoc sexu membrorum Flaviana indumento vestita quoque vestita nefas sunt duceretur nam exustus mortem calamitatum abrepto carnifex similium ne.',
      loveIts: 1,
      created_at: new Date()
    },

    {
      title: 'Mon second post',
      content: 'Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Illud autem non dubitatur quod cum esset aliquando virtutum omnium domicilium Roma, ingenuos advenas plerique nobilium, ut Homerici bacarum suavitate Lotophagi, humanitatis multiformibus officiis retentabant.',
      loveIts: 0,
      created_at: new Date()
    },
  ]
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }
  
  addPost(post : Post) {

    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date(),
    };
    postObject.title = post.title;
    postObject.content = post.content;
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    console.log("index" + postIndexToRemove)
    this.emitPostSubject();
  }
}