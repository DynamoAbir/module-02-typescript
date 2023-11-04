// Generic type

type GenericArray<T> = Array<T>;

// const rollNumber: number[] = [3, 4, 5, 6];
const rollNumber: GenericArray<number> = [3, 4, 5, 6];

// const mentors: string[] = ["abir", "shaon", "masud"];
const mentors: Array<string> = ["abir", "shaon", "masud"];

// const boolArray: boolean[] = [true, true, false];
const boolArray: Array<boolean> = [true, true, false];

const user: GenericArray<{ name: string; age: number }> = [
  {
    name: "Abir",
    age: 23,
  },
  {
    name: "shaon",
    age: 43,
  },
  {
    name: "kokil",
    age: 23,
  },
];

// generic tuple
type GenericTuple<X, Y> = [X, Y];

// const manush: [string, string] = ["Mr.x", "mrs.Y"];
const manush: GenericTuple<string, string> = ["Mr.x", "mrs.Y"];

const UserWithId: GenericTuple<number, { name: string; email: string }> = [
  123,
  { name: "ABir", email: "mhabir10@gmail.com" },
];
