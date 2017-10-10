export class TestTask {

    id?: number;
    name?: string;
    priority?: number;
    startDate?: Date;
    endDate?: Date;
    status?: 'WAIT' | 'DOING' | 'DONE' | 'BLOCKED';
    description?: string;

    // tracking

    // private Product product;
    productId?: number;
    productName?: string;

    // private Project project;
    projectId?: number;
    projectName?: string;

    // private Build build;
    buildId?: number;
    buildName?: string;

    // private User leader;
    leaderId?: number;
    leaderUsername?: string;
    leaderDisplayName?: string;
}
