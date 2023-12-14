import bcrypt from "bcryptjs";

export async function hashPass(plainPass: string): Promise<string> {
    try {
        const salt: string = await bcrypt.genSalt(10);
        return await bcrypt.hash(plainPass, salt);
    } catch (error) {
        throw error;
    }
}

export async function checkPass(plainPass: string, hashedPass: string): Promise<boolean> {
    try {
        return await bcrypt.compare(plainPass, hashedPass);
    } catch (error) {
        throw error;
    }
}