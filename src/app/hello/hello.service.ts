import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { HelloInputCreate } from './inputs/hello.input';
import { Hello, HelloDocument } from './models/hello.model';

@Injectable()
export class HelloService {
    constructor(
        @InjectModel(Hello.name)
        private readonly helloModel: Model<HelloDocument>
    ) {}

    public async create(data: HelloInputCreate) {
        return new this.helloModel(data)
        .save()
    }

    public async getMany() {
        return this.helloModel.find({});
    }
}
