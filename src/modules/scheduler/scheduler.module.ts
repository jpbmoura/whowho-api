import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [ScheduleModule.forRoot(), AlbumModule],
  providers: [SchedulerService],
})
export class SchedulerModule {}
