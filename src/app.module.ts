import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './modules/album/album.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  exports: [PrismaService],
  imports: [AlbumModule, SchedulerModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
