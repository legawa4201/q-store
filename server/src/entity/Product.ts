import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User";

type ProductType = "Konsumsi" | "Pembersih"


@Entity({ name: `Products` })
export class Product {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column(`varchar`, { nullable: false })
    productName: string;

    @Column(`integer`, { nullable: false })
    stock: number;

    @Column(`enum`, { nullable: false, enum: [`Konsumsi`, `Pembersih`] })
    productType: ProductType

    @ManyToOne((type) => User)
    @Column(`integer`, { nullable: false })
    UserId: number;

    @Column(`timestamptz`, { nullable: false, default: new Date() })
    createdAt: Date;

    @Column(`timestamptz`, { nullable: false, default: new Date() })
    updatedAt: Date;
}
