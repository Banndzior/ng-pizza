export interface Comment {
  body: string;
}

export interface CommentResponse {
  size: number;
  value: Comment[];
}
