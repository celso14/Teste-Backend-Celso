import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";

import { createProductBody } from "../dtos/create-product.dto";
import { updateProductBody } from "../dtos/update-product.dto";
import { deleteProductBody } from "../dtos/remove-product.dto";


const prisma = new PrismaClient();

export const all = async (req:Request, res:Response) => {
    try{
        const list = await prisma.product.findMany({
            where: {
                status: true
            }
        });
        return res.status(200).json({...list});
    }
    catch(err: any){
        return res.status(400).send({error: err});
    }
}

export const create = async (req:Request, res: Response) => {
    try{
        const raw = {
            ...req.body,
            status: true,
            updated_at: new Date(),
            deleted_at: new Date()
        }

        const createdProductDTO = createProductBody.parse(raw);

        const createdProduct = await prisma.product.create({
            data: createdProductDTO
        });

        return res.status(201).send({createdProduct});
    }
    catch(err: any){
        return res.status(400).send({Error: err});
    }
}

export const update = async (req:Request, res: Response) => {
    try{
        const raw = {
            ...req.body,
            updated_at: new Date(),
        }

        const updatedProductDTO = updateProductBody.parse(raw);

        const updatedProduct = await prisma.product.update({
            where:{
                id: updatedProductDTO.id
            },
            data: {
                name: updatedProductDTO.name || undefined,
                category: updatedProductDTO.category || undefined,
                quantity: updatedProductDTO.quantity || undefined,
                status: updatedProductDTO.status || undefined,
                updated_at: updatedProductDTO.updated_at
            }
        });

        return res.status(200).send({updatedProduct});
    }
    catch(err: any){
        return res.status(400).send({Error: err});
    }
}

export const remove = async (req:Request, res: Response) => {
    try{
        const raw = {
            ...req.body,
            status: false,
            deleted_at: new Date(),
        }

        const deletedProductDTO = deleteProductBody.parse(raw);

        const deletedProduct = await prisma.product.update({
            where:{
                id: deletedProductDTO.id
            },
            data: {
                status: deletedProductDTO.status,
                deleted_at: deletedProductDTO.deleted_at
            }
        });

        return res.status(200).send({deletedProduct});
    }
    catch(err: any){
        return res.status(400).send({Error: err});
    }
}