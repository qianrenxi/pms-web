import { TestStep } from './test-step';

export class TestCase {
    id?: number;
    name?: string;
    /** 前置条件 */
    precondition?: string;
    keywords?: string;

    // private Product product;
    productId?: number;
    productName?: string;
    // private Module module;
    moduleId?: number;
    moduleName?: string;
    // private Requirement requirement;
    requirementId?: number;
    requirementName?: string;

    steps?: TestStep[];

    // Attributes
    /** 优先级 */
    priority?: number;
    /** 用例类型 */
    type?: string;
    /** 适用阶段 */
    stage?: string;
    /** 执行结果 */
    result?: string;
    /** 状态 */
    status?: string;

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
