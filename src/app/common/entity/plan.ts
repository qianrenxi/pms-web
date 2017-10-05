
export class Plan {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    description?: string;

    // product: {id: number, name: string};
    productId?: number;
    productName?: string;

    // TODO: 添加父子计划的业务
}
