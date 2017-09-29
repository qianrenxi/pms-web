export class Product {
    id?: number;
    name?: string;
    code?: string;
    productLeader?: {id: number, name: string};
    testLeader?: {id: number, name: string};
    publishLeader?: {id: number, name: string};
    type?: 'NORMAL' | 'MULTI_BRANCH' | 'MULTI_PLATFORM'; // string;
    description?: string;
    accessControl?: 'PUBLIC' | 'PRIVATE' | 'CUSTOM'; // string;

    status?: string;
    createdBy?: {id: number, name: string};
    createdDate?: Date;

    requirementActivedCount?: number;
    requirementChangedCount?: number;
    requirementDraftCount?: number;
    requirementClosedCount?: number;
    planCount?: number;
    projectCount?: number;
    bugCount?: number;
    documentCount?: number;
    testCaseCount?: number;
    buildCount?: number;
    publishCount?: number;

    isDeleted?: boolean;
}
