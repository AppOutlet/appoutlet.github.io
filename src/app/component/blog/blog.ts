import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  private query = gql`
    {
      publication(host: "blog.appoutlet.dev") {
        posts(first: 4) {
          edges {
            node {
              title
              brief
              url
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  posts: Post[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<PublicationResponse>({ query: this.query })
      .valueChanges.pipe(
        map(
          (result: ApolloQueryResult<PublicationResponse>) =>
            result.data.publication.posts.edges
        ),
        map((edges) => edges.map((edge) => edge.node))
      )
      .subscribe((result) => {
        this.posts = result;
      });
  }
}

export type PublicationResponse = {
  publication: Publication;
};

export interface Publication {
  posts: Posts;
}

export interface Posts {
  edges: PostEdge[];
}
export interface PostEdge {
  node: Post;
}
export interface Post {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage: CoverImage;
}
export interface CoverImage {
  url: string;
}
