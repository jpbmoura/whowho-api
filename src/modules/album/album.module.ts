import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumRepository } from './album.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AlbumController],
  providers: [PrismaService, AlbumService, AlbumRepository],
})
export class AlbumModule {}
