import { personAraayRepository } from "../repositories/person.repository";
import { CreatePersonDTO, UpdatePersonDTO } from "../dtos/person.dto";
import { HttpException } from "../exceptions/http-exception";
import { Person } from "../types/person.type";

const personRepo = new personAraayRepository();


export class PersonService {
    static createPerson(data: { name: string; age: number; }) {
        throw new Error("Method not implemented.");
    }
    getOnePerson(id?: string){
        if (!id) {
            throw new HttpException(400, "ID is required");
        }
        const person = personRepo.getOne(id);
        if (!person) {
            throw new HttpException(404,"Person not foung");
        }
        //map/trasform data if needed
        person.name = person.name.toUpperCase();
        return person;
    }

    createPerson(CreatePersonDTO: CreatePersonDTO){
        //business logic
        if(CreatePersonDTO.age < 18){
            throw new HttpException(400,"Age must be as least 18");
        }
        const newPerson = personRepo.create(
            {
                id: Date.now(), // example
                ...CreatePersonDTO
            }
        );

    }

    updatePerson(id: string, updateData: UpdatePersonDTO): Person {
    // 2.1 - Validate if id exists
    const person = personRepo.getOne(id);
    if (!person) {
        throw new HttpException(404, "Person not found");
    }
    
    // 2.2 - Validate if name is not "admin"
    if (updateData.name && updateData.name.toLowerCase() === "admin") {
        throw new HttpException(403, "Cannot set name to 'admin'");
    }
    
    // 2.3 - Call repository update
    const updated = personRepo.update(id, updateData);
    return updated!;
}
}
