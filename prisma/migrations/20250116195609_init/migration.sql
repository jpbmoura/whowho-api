-- CreateTable
CREATE TABLE "albums_seen" (
    "id" SERIAL NOT NULL,
    "albumlist_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "album_seen_list_pkey" PRIMARY KEY ("id")
);
