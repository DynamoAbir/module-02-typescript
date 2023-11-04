// Interface

type User1 = {
  name: string;
  age: number;
};
interface User2 {
  name: string;
  age: number;
}

type UserWihtRole1 = User1 & { role: string };

interface UserWithRole2 extends User2 {
  role: string;
}

const user1: UserWithRole2 = {
  name: "Abir",
  age: 25,
  role: "manager",
};

type rollNumber = number;

type Roll1 = number[];
interface Roll2 {
  [index: number]: number;
}
const rollNumber1: Roll1 = [1, 2, 3];

type Add = (num1: number, num2: number) => number;
interface Add1 {
  (num1: number, num2: number): number;
}
const add: Add = (num1, num2) => num1 + num2;
