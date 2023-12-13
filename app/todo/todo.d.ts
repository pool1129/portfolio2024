type UserInfo = {
  user?: string;
  comment?: string;
  date?: string;
};

type CookieType = {
  name?: string;
  value?: string;
};

interface Comment {
  _id: string;
  user: string;
  comment: string;
  date: string;
  editYn: string;
}
