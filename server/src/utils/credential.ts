import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET || `IniRahasia`;

interface UserPayload extends JwtPayload {
    id?: number
    role?: string
}

export function genToken(payload: object): string {
    return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: `10h` });
}

export function verifToken(token: string): UserPayload | string {
    return jsonwebtoken.verify(token, JWT_SECRET);
}