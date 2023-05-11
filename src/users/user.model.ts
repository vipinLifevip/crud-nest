import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: String,
    age:Number
});

export interface User {
    name: string;
    age: number;
}