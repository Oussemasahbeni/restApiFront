import { Category } from "./category";

export interface Product {

    id: number;
    lib: string;
    prix: number;
    qte: number;
    categorie: Category;
}
