import { Project } from './project';
import { Requirement } from './requirement';

export class Task {
    id: number;
    name: string;
    type: string; // Enum {设计、开发、测试、研究、讨论、界面、事务、其他...}
    description?: string;
    /** 预估工时 */
    estimate?: number;
    /** 优先级 */
    priority?: number;
    /** 预计开始日期 */
    estimateStarted?: Date;
    /** 截止日期 */
    deadline?: Date;

    // project: Project;
    projectId?: number;
    projectName?: string;

    // assignedTo?: {id: number, name: string, displayName: string};
    assignedToId?: number;
    assignedToUsername?: string;
    assignedTodDisplayName?: string;

    // requirement?: Requirement;
    requirementId?: number;
    requirementName?: string;

    // 影藏属性
    status?: string; // Enum {未开始、进行中、已完成、已关闭}



    // 工时信息
    // -- 预计开始日期 -- 截止日期 -- 预计工时
    /** 实际开始日期 */
    actsureStarted?: Date;
    /** 已耗时/总耗时 */
    usedTime?: number; // 单位小时
    leftTime?: number;

    // 任务周期 life circle
    // createdBy?: {id: number, name: string, displayName: string};
    createdById?: number;
    createdByUsername?: string;
    createdByDisplayName?: string;
    createdDate?: Date;

    // caceledBy?: {id: number, name: string, displayName: string};
    canceledById?: number;
    canceledByUsername?: string;
    canceledByDisplayName?: string;
    canceledDate?: Date;

    // closedBy?: {id: number, name: string, displayName: string};
    closedById?: number;
    closedByUsername?: string;
    closedByDisplayName?: string;
    closedDate?: Date;
    closeReason?: string;

    // lastUpdatedBy?: {id: number, name: string, displayName: string};
    // lastUpdatedDate?: Date;

    // 完成
    completedById?: number;
    completedByUsername?: string;
    completedByDisplayName?: string;
    completedDate?: Date;
}
