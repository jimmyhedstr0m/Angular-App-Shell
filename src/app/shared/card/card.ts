export interface Card {
  id: number;
  user: {
    id: number,
    firstName: string,
    lastName: string
  };
  title: string;
  text: string;
  link: {
    url: string,
    image: string,
    text: string
  };
  comments: any[];
  votes: {
    up: number,
    down: number,
    love: number,
    laugh: number,
    emphasize: number,
    question: number
  };
}
