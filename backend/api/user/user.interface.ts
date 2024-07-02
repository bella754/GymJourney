export interface IUser {
  name: string;
  gender: "m" | "f" | "d" | "not specified";
  age: number;
  height: number;
  weight: number;
  ethnicity:
    | "Asian"
    | "Black"
    | "Hispanic"
    | "White"
    | "Native American"
    | "Other"
    | "not specified";
  experience:
    | "beginner"
    | "intermediate"
    | "advanced"
    | "expert"
    | "not specified";
  gym: string;
  //avatarUrl: string
}
