import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AlbumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findLast() {
    return this.prisma.albumSeenList.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findAlbumById(albumId: number) {
    return this.prisma.albumList.findFirst({
      where: {
        id: albumId,
      },
    });
  }

  async insertNewAlbum(albumId: number) {
    return this.prisma.albumSeenList.create({
      data: {
        albumlist_id: albumId,
      },
    });
  }

  async findAllSeenAlbums() {
    return this.prisma.albumSeenList.findMany();
  }

  async clearSeenAlbums() {
    return this.prisma.albumSeenList.deleteMany();
  }
}
