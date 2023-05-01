import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";

const type :  IResolvers = {
    Student: {
        courses: parent => {
            const coursesList: Array<any> = [];
            parent.courses.map((course: string)=>{
                coursesList.push(_.find(database.courses, ["id", course]));
            });
            return coursesList;
        }
    },
    Course: {
        students: parent => {
            const studentsList: Array<any> = [];
            const courseId = parent.id
            database.students.forEach((student: any)=>{
                if(student.courses.find( (id:any) => id === courseId)) {
                    studentsList.push(student);
                }
            })
            return studentsList;
        },
        path: parent => `https://udemy.com${parent.path}`
    }
}


export default type;