// create a zod schema of
// id as string
// name as string, min length 1, default value "Unnamed Product"
// price as number, min 0
// category as optional string 
// z.string().optional() // optional
// z.default("Unknown Product") // default value if not provided

import { z } from "zod";

export const ProdoctSchema = z.object(
    {
        id: z.string(),
        name: z.string()
            .min(1,"Name is required")
            .default("Unknown Product"),
        price: z.number()
            .min(0,"Price must be a positive number"),
        category: z.string().optional()
    });

export type product = z.infer<typeof ProdoctSchema>;
// make a dto from this schema for create
// on create, id is not required


// make a dto from this schema for update
// on update, all fields are optional 

// apply model, dto, and controller for product similar to person

