import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import axios from 'axios';

const prisma = new PrismaClient();

export const all = async (req:Request, res:Response) => {
    try{
        const response = await axios.get("http://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios");

        const data = response.data;
        
        const unique = data[0].id;

        const inDB = await prisma.city.findUnique({where: {
            id: unique
        }});

        if(!inDB){
            for(let i = 0; i < data.length; i++){
                await prisma.city.create({
                    data: {
                        id: data[i].id,
                        name: data[i].nome
                    }
                });
            }
            return res.status(201).json(data);
        }

        return res.status(200).json(data);
    }
    catch(err: any){
        return res.status(400).send({error: err});
    }
}