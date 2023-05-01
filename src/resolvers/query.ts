import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";

const query :  IResolvers = {
    Query: {
        students(): any {
            return database.students;
        },
        student(__: void, { id }): any {
            const result = database.students.find(student => student.id === id);
            if (result === undefined) {
                return {
                    id: -1,
                    name: `Student with id ${id} not found`,
                    email:"",
                    courses: [],
                }
            }
            return result
        },
        courses(): any {
            return database.courses;
        },
        course(__: void, { id }): any {
            const result = database.courses.find(course => course.id === id);
            if (result === undefined) {
                return {
                    id: "-1",
                    title: `Course with id ${id} not found`,	
                    description:"",
                    clases: "",
                    time: "",
                    level: "",
                    logo: "",
                    path: "",
                    teacher: "",
                    students: [],
                    reviews: [],
                }
            }
            
            return result;
        }
    }
}

export default query;