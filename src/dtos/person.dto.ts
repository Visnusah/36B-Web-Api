import { z } from "zod";
import { PersonSchema } from "../types/person.type";

// DTO - Data transfe object (can be any input/ouput to client)
export const CreatePersonDTO = PersonSchema.omit({ id: true }); 
// for create, id is not required
export type CreatePersonDTO = z.infer<typeof CreatePersonDTO>;



// DTO for updating - all fields optional (partial update)
export const UpdatePersonDTO = PersonSchema.partial().omit({ id: true });
export type UpdatePersonDTO = z.infer<typeof UpdatePersonDTO>;