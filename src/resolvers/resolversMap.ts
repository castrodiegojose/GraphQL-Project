import { IResolvers } from "@graphql-tools/utils";
import query from "./query";
import mutations from "./mutations";
import type from "./type";

const resolversMap :  IResolvers = {
    ...query,
    ...mutations,
    ...type
}

export default resolversMap;