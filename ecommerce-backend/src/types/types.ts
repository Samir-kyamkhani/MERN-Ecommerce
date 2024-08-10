import { Request, Response, NextFunction } from "express";


export interface RequestBody {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: "user" | "admin";
  gender: "male" | "female";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  age: number;
}


export type AsyncRequestHandler = (
  req: Request<{}, {}, RequestBody>,
  res: Response,
  next: NextFunction
) => Promise<Response>;



// Define the IUser interface extending Document
export interface IUser extends Document {
  _id: string; // Mongoose's _id field
  name: string;
  email: string;
  photo: string;
  role: "user" | "admin";
  gender: "male" | "female";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  age: number;
  password: string;
  // Optionally, you can add additional fields specific to the IUser interface
  // For example:
  // confirmPassword: string;
  // passwordChangedAt: Date;
  // passwordResetToken: string;
  // passwordResetExpires: Date;
  // active: boolean;
}