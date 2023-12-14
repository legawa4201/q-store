import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User";
import { Product } from "./Product";

@Entity({ name: `Orders` })
export class Order {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column(`integer`, { nullable: false })
    quantity: number;

    @ManyToOne((type) => Product)
    @Column(`integer`, { nullable: false })
    ProductId: number;

    @ManyToOne((type) => User, { onDelete: `CASCADE`, onUpdate: `CASCADE` })
    @Column(`integer`, { nullable: false })
    UserId: number;

    @Column(`timestamptz`, { nullable: false, default: new Date() })
    createdAt: Date;

    @Column(`timestamptz`, { nullable: false, default: new Date() })
    updatedAt: Date;
}
