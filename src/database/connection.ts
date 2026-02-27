
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseConnection implements OnModuleInit, OnModuleDestroy {
  private prisma = new PrismaClient();

  async onModuleInit() {
    await this.prisma.$connect();
    console.log(' PostgreSQL connected');

    const mongoUri = process.env.DB_URI as string;

    if (!mongoUri) {
      throw new Error('MONGO_URI not defined');
    }

    await mongoose.connect(mongoUri);
    console.log(' MongoDB connected');
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
    await mongoose.disconnect();
    console.log(' Database connections closed');
  }

  get client() {
    return this.prisma;
  }
}

