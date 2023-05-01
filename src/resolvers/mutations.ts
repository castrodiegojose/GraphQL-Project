import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";
import _ from "lodash";

const mutations :  IResolvers = {
   Mutation: {
        newCourse(__:void, { course }): any {
            const courseItem = {
                id: String(database.courses.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: []
            }
            if(database.courses.filter(course => course.title === courseItem.title).length === 0) {
                database.courses.push(courseItem);
                return courseItem;
            }

            return {
                id: -1,
                title: "Course already exist",
                description: "",
                clases: -1,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        },
        updateCourse(__:void, { course }): any {
            const existElement = _.findIndex(database.courses, cours => cours.id === course.id);
            if(existElement) {
                const reviews = database.courses[existElement].reviews
                course.reviews = reviews
                database.courses[existElement] = course;
                return course;
            }

            return {
                id: -1,
                title: "Course does not exist",
                description: "",
                clases: -1,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }

        },
        deleteCourse(__:void, { id }): any {
           const removeCourse = _.remove(database.courses, (cours => cours.id === id))
           if(removeCourse[0] === undefined){
                return {
                    id: -1,
                    title: "Course does not exist",
                    description: "",
                    clases: -1,
                    time: 0.0,
                    level: "ALL",
                    logo: "",
                    path: "",
                    teacher: "",
                    reviews: []
                }
           }

           return removeCourse[0]
        }
   }
}

export default mutations;