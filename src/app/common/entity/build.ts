export class Build {
    id?: number;
    name?: string;
    tag?: string;
    repositoryUrl?: string;
    downloadUrl?: string;
    description?: string;

    // private Product product;
    productId?: number;
    productName?: string;

    // private Project project;
    projectId?: number;
    projectName?: string;

    // private User buildedBy;
    buildedById?: number;
    buildedByUsername?: string;
    buildedByDisplayName?: string;

    buildedDate: Date;
}
