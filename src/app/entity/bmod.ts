
/**
 * Product Module, Business Module, BMOD
 * 注：避讳，不得已使用这个名字，服务端叫 ProductModule
 */
export class Bmod {
    id: number;
    name: string;
    product: {id: number, name: string};

    parentId?: number;
    children?: Bmod[]
}
