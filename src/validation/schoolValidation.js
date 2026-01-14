import { z } from "zod";

export const schoolValidation = (obj) => {
    const schema = z
        .object({
            name: z.string().nonempty(),

            role_id: z.number().positive(),

            school_id: z.number().positive(),

            email: z.email(),

            mobile_no: z.string(),
            password: z.string().min(6),

            description: z.string().optional(),

            school_name: z.string().min(2),

            country: z.string().min(2),

            state: z.string().min(2),

            city: z.string().min(2),

            pincode: z.string(),

            timezone: z.string().min(1),

            cost: z.number().positive(),

            student_count: z.number().positive(),

            teacher_count: z.number().positive(),

            language_preference: z.string().min(1),

            board: z.enum(["CBSE", "ICSE", "State", "IB", "IGCSE"]),

            status: z.enum(["Active", "Inactive"]),

            website_enabled: z.boolean(),

            allowed_domains: z.string().optional(),
        })
        .strict();

    return schema.parse(obj);
};
