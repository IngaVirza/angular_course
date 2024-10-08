import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RequestRouting } from './request-routing.module';
import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [PostListComponent, PostItemComponent],
  imports: [CommonModule, RequestRouting, HttpClientModule],
  providers: [PostService],
})
export class RequestModule {}
