import { Prisma, PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config({ path: '.env' })


// const prismaFindAndSoftDeleteMiddleWare: Prisma.Middleware = async (params, next): Promise<Prisma.Middleware<any>> => {
//     switch (params.action) {
//         case "findFirst":
//         case "findUnique":
//             return await next({
//                 ...params,
//                 action: "findFirst",
//                 args: { ...params.args, where: { ...params.args?.where, deletedAt: null, isDeleted: false } }
//             });

//         case "findMany":
//         case "count":
//         case "findRaw":
//             return await next({ ...params, args: { ...params.args, where: { ...params.args?.where, deletedAt: null, isDeleted: false } } });

//         case "delete":
//         case "deleteMany":
//             return await next({ ...params, action: "update", args: { ...params.args, data: { deletedAt: new Date(), isDeleted: true } } });

//         default:
//             return await next(params);
//     }
// };

// export const PrismaService = new PrismaClient()
// PrismaService.$use(prismaFindAndSoftDeleteMiddleWare)
// export const prismaService =  PrismaService()





export class PrismaService extends PrismaClient {
    constructor() {
        super()
        this.onModuleInit().catch(error =>{ throw new Error(error) })
    }

    async onModuleInit(): Promise<void> {
        await this.$connect();
        this.$use(this.prismaFindAndSoftDeleteMiddleWare);
        // await this.$disconnect();
    }

    prismaFindAndSoftDeleteMiddleWare: Prisma.Middleware = async (params, next): Promise<Prisma.Middleware<any>> => {
        switch (params.action) {
            case "findFirst":
            case "findUnique":
                return await next({
                    ...params,
                    action: "findFirst",
                    args: { ...params.args, where: { ...params.args?.where, deletedAt: null, isDeleted: false } }
                });

            case "findMany":
            case "count":
            case "findRaw":
                return await next({ ...params, args: { ...params.args, where: { ...params.args?.where, deletedAt: null, isDeleted: false } } });

            case "delete":
            case "deleteMany":
                return await next({ ...params, action: "update", args: { ...params.args, data: { deletedAt: new Date(), isDeleted: true } } });

            default:
                return await next(params);
        }
    };

    softDeleteMiddleWare: Prisma.Middleware = async (params, next): Promise<Prisma.Middleware<any>> => {
        if (params.action === "delete") {
            return await next({
                ...params,
                action: "update",
                args: {
                    ...params.args,
                    data: {
                        deletedAt: new Date(),
                        isDeleted: true
                    }
                }
            });
        }

        return await next(params);
    };

    findMiddleWare: Prisma.Middleware = async (params, next): Promise<Prisma.Middleware<any>> => {
        return await next({ ...params, args: { ...params.args, where: { ...params.args?.where, deletedAt: null, isDeleted: false } } });
    };
}

export const prismaService = new PrismaService()