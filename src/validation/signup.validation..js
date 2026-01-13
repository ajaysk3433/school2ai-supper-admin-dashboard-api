import * as z from "zod";

export const singupValidation = (newUser) => {
    const newUserSchema = z.object({
        name: z.string({ error: "field name is required" }).nonempty(),
        role_id: z.number({ error: "field name is required" }),
        school_id: z.number().optional(),
        email: z.email().nonempty(),
        mobile_no: z.string().min(10).max(10).nonempty(),
        password: z.string().min(6).nonempty(),
        description: z.string().optional(),
    });
    newUserSchema.parse(newUser);
};
