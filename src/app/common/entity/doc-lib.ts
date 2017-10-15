export class DocLib {
    id?: number;
    name?: string;

    // product?: Product;
    productId?: number;
    productName?: string;

    // project: Project; // 所属项目
    projectId?: number;
    projectName?: string;

    // createdBy
    createdById?: number;
    createdByUsername?: string;
    createdByDisplayName?: string;
    createdDate?: Date;

    // lastModifiedBy
    lastModifiedById?: number;
    lastModifiedByUsername?: string;
    lastModifiedByDisplayName?: string;
    lastModifiedDate?: Date;
}
