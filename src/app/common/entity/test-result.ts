import { TestStep } from './test-step';

export class TestResult {
    id?: number;
    result?: string;

    // private TestCase testCase;
    testCaseId?: number;
    testCaseName?: string;

    // private TestTask testTask;
    testTaskId?: number;
    testTaskName?: string;

    // private User executedBy;
    executedById?: number;
    executedByUsername?: string;
    executedByDisplayName?: string;
    executedDate?: Date;

    details?: TestStep[];
}
