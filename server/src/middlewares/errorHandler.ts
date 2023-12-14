import { Response, Request } from "express";

export default function errorHandler(err: Error, req: Request, res: Response) {
    let status: number;
    let message: string;

    switch (err.name) {
        case `ErrorName`:
            status = 0
            message = ``
            break;
    
        default:
            status = 500;
            message = `Internal Server Error`;
            break;
    }
    res.status(status).json({ message });
}