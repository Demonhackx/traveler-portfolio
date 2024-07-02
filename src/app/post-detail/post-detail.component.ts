import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: ContentService
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.blogService.getPostById(postId).subscribe(post => this.post = post);
    } else {
      console.error('Post ID is null');
    }
  }
}
