import prisma from "../prisma";

export async function getProducts(where: {} = {}) {
  return prisma.product.findMany({
    where,
  });
}
