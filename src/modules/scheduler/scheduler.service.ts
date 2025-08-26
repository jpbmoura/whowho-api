import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AlbumService } from '../album/album.service';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(private readonly albumService: AlbumService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleUpdateTodaysAlbum() {
    this.logger.log('Starting daily album update at midnight...');

    try {
      await this.albumService.updateTodayAlbum();
      this.logger.log('Daily album update completed successfully');
    } catch (error) {
      this.logger.error("Failed to update today's album:", error.message);
    }
  }
}
