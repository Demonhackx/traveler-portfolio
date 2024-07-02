import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Router } from '@angular/router';

interface Post {
  id: number;
  title: string;
  date: string;
  summary: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title: string = '';
  description: string = '';
  posts: Post[] = [];
  buttonTitle: string = "Click and Read";

  constructor(
    private contentService: ContentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.contentService.getBlogContent().subscribe(data => {
      this.title = data.title;
      this.description = data.description;
      this.posts = data.posts;
    });
  }

  goToPost(id: number): void {
    this.router.navigate(['/post', id]);
  }

}
