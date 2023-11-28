import { Product } from "./product.model";

export interface ResponseProducts {
    ok: boolean;
    data: Product[];
}
