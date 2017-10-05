
export class Module {
    id?: number;
    name?: string;

    // product: { id: number, name: string };
    productId?: number;
    productName?: string;

    // parent: Module;
    parentId?: number;
    parentName?: number;

    childCount?: number;

    children?: Module[]

    path?: Module[];
    isLeaf?: boolean;
}
