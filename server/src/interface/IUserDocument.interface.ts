import { Document } from 'mongoose';
import { UserInterface } from './User.interface';

export interface IUserDocument extends UserInterface, Omit<Document, 'id'> {}
