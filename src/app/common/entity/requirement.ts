export class Requirement {
    id: number;
    name: string;
    description: string;

    /** 预估工时 */
    estimate?: number;
    /** 验收标准 */
    acceptance?: string;
    /** 关键词 */
    keyword?: string;

    // 动态可配置属性
    /** 优先级 */
    priority?: number;
    /** 来源 */
    source?: string;
    sourceRemark?: string;
    /** 关闭原因 */
    closeReason?: string;

    // 评审 {由谁评审，是否需要评审}
    // 抄送给 (相关人员) ==> 发送系统消息、邮件和短信通知
    // 附件

    // 固定可配置属性
    // TODO: 改成 enum
    /** 阶段 */
    stage?: string;
    /** 状态 */
    status?: string;
    /** 评审结果 */
    reviewResult?: string;

    /** 所属产品 */
    product: {id: number, name: string};
    /** 所属模块 */
    productModule: {id: number, name: string};
    /** 所属计划 */
    plan: {id: number, name: string};

    // 统计
    /** 任务数 */
    taskCount: number;
    /** bug数 */
    bugCount: number;
    /** 用例数 */
    caseCount: number;
}
