import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class MongoService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    const uri = process.env.DB_URI as string;

    if (!uri) {
      throw new Error('MONGO_URI not defined');
    }

    await mongoose.connect(uri);
    console.log(' MongoDB connected');
  }

  async onModuleDestroy() {
    await mongoose.disconnect();
  }
}
