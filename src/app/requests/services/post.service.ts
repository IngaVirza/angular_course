import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable()
export class PostService {
  constructor(private __httpClient: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.__httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
