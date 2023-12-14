import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm"
import { hashPass } from "../utils/hashing";

type UserRole = "admin" | "customer"

@Entity({ name: `Users` })
export class User {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column(`varchar`, { nullable: false, unique: true })
    username: string;

    @Column(`varchar`, { nullable: false })
    password: string;

    @Column(`enum`, { nullable: false, enum: [`admin`, `customer`] })
    role: UserRole

    @BeforeInsert()
    async HashPass() {
        const hashedPass: string =  await hashPass(this.password)
    }
}
