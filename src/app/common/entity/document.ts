export class Document {
    id?: number;
    name?: string;
    keyword?: string;
    format?: string;
    content?: string;
    originalContent?: string;

    docLibId?: number;
    docLibName?: string;

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
