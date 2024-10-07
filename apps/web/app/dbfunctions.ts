import { Post } from './models/types';
import prisma from '../lib/prisma';

export function getFeeds(): Promise<Post[]> {
  return prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
}