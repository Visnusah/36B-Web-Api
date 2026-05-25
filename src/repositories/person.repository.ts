import { Person } from "../types/person.type";
import { data } from "../models/person.model";

// database/source contact
interface IPersonRepository {
    getAll() : Person[];
    getOne(id : string) : Person | undefined;
    create(person : Person) : Person | undefined;

    update(id: string, updateData: Partial<Person>): Person | undefined; // ✨ NEW
}

export class personAraayRepository implements IPersonRepository {
    getAll(): Person[] {
        return data;
    }
    getOne(id: string): Person | undefined {
        const found = data.find(p => p.id === parseInt(id));
        return found;
    }
    create(person: Person): Person | undefined {
        data.push(person);
        return person;
    }

    // In personAraayRepository class, add:
update(id: string, updateData: Partial<Person>): Person | undefined {
    const index = data.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        return undefined; // Not found
    }
    // Merge existing person with new data
    data[index] = { ...data[index], ...updateData };
    return data[index];
}

}

