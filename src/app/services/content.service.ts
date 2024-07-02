import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogContent {
  title: string;
  description: string;
  posts: { id: number, title: string, date: string, summary: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentUrl = 'assets/content/about-me.json';
  private blogContentUrl = 'assets/content/blog-content.json';
  private destinationContentUrl = 'assets/content/destination-content.json';

  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    return this.http.get<any>(this.contentUrl);
  }

  getBlogContent(): Observable<BlogContent> {
    return this.http.get<any>(this.blogContentUrl);
  }

  getDestinationContent(): Observable<any> {
    return this.http.get<any>(this.destinationContentUrl);
  }

  getPostById(id: any): Observable<any> {
    return this.http.get<any>(`assets/post/post${id}.json`);
  }
}
