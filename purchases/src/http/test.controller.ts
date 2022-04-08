import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Controller()
export class TestController {
  constructor(private prisma: PrismaService) {}

  @Get('ok')
  async hello() {
    return this.prisma.customer.findMany();
  }
}
