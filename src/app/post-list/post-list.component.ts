import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Est carnifex nam fuere calamitatum altae quidem peremptae conplures permissa flagitiis hoc sexu membrorum Flaviana indumento vestita quoque vestita nefas sunt duceretur nam exustus mortem calamitatum abrepto carnifex similium ne.',
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: 'Mon second post',
      content: 'Incenderat autem audaces usque ad insaniam homines ad haec, quae nefariis egere conatibus, Luscus quidam curator urbis subito visus: eosque ut heiulans baiolorum praecentor ad expediendum quod orsi sunt incitans vocibus crebris. qui haut longe postea ideo vivus exustus est.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Illud autem non dubitatur quod cum esset aliquando virtutum omnium domicilium Roma, ingenuos advenas plerique nobilium, ut Homerici bacarum suavitate Lotophagi, humanitatis multiformibus officiis retentabant.',
      loveIts: 0,
      created_at: new Date()
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
