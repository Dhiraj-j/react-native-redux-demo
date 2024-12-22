export type Location = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
};

export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    large: string;
  };
  nat: string;
  dob: {
    date: Date;
    age: number;
  };
};
