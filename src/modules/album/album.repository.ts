import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AlbumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findLast() {
    return this.prisma.albums_seen.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findAlbumById(albumId: number) {
    return this.prisma.albums.findFirst({
      where: {
        id: albumId,
      },
    });
  }

  async insertNewAlbum(albumId: number) {
    return this.prisma.albums_seen.create({
      data: {
        albumlist_id: albumId,
      },
    });
  }

  async findAllSeenAlbums() {
    return this.prisma.albums_seen.findMany();
  }

  async clearSeenAlbums() {
    return this.prisma.albums_seen.deleteMany();
  }
}
