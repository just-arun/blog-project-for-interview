import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type HelloDocument = Hello & Document;

@Schema({})
export class Hello {
    @Prop({ required: true })
    message: string;
}

export const HelloSchema = SchemaFactory
.createForClass(Hello);