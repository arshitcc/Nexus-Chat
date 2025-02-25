import { CreateServerSchema } from "@/schemas/create-server.schema"
import axios from "axios";

export const createServerAction = async (data: CreateServerSchema) => {
    try {
        return {
            data: "Server Created",
            error: null,
            message: 'Server created successfully'
        }
    } catch (error) {
        return {
            data: null,
            error: error,
            message: 'Something went wrong'
        }
    }
}