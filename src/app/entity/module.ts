
export class Module {
    id: number;
    name: string;
    product: { id: number, name: string };

    // parentId?: number;
    parent: Module;
    children?: Module[]

    childCount?: number;
}
