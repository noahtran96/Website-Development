import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price!: string;

  @Column({ type: "int", default: 0 })
  stock!: number;
}
