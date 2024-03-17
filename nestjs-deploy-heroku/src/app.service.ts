import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class AppService {
  getHello(): { message: string; version: string } {
    return {
      version: process.env.VERSION,
      message: 'Test deploy vercel with actions 3!!!',
    };
  }
}
