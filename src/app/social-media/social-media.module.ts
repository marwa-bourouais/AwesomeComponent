import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostsResolver } from "./resolvers/posts.resolver";
import { PostsService } from "./services/posts.service";
import { SocialMediaRoutingModule } from "./social-media-routing.module";
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { MatCard, MatCardModule } from "@angular/material/card";
import { CommentsComponent } from "../shared/components/comments/comments.component";
import { SharedModule } from "../shared/shared.module";
import { ShortenPipe } from "../shared/pipes/ShortenPipe.pipe";

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
