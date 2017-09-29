import { Product } from './product';
import { Bmod } from './bmod';
import { Plan } from './plan';
import { Project } from './project';
import { Requirement } from './requirement';
import { Task } from './task';
import { User } from './user';

export class Issue {
    id: number;
    name: string;
    description: string;

    product?: Product;
    bmod?: Bmod;
    plan?: Plan;
    type?: string; // {代码错误、界面优化、设计缺陷、配置相关、安装部署、安全相关、性能问题、标准规范、测试脚本、代码改进、其他等}
    severity?: number; // 严重程度
    pri?: number; // 优先级
    status?: string; // {激活、已解决、已关闭}
    affirmed?: boolean; // 是否确认
    assignedTo?: User;
    deadline?: Date; // 截止日期

    system?: string; // {Windows、Mac OS X、Android 4.4、IOS9.8 等}
    browser?: string; // {Chrome、IE9、IE10、Firefox 等}
    keyword?: string;

    // 项目/需求/任务
    project: Project; // 所属项目
    requirement: Requirement; // 相关需求
    task: Task; // 相关任务

    // Issue 的生命周期
    createdBy: User;
    createdDate: Date;

    effectBuild: any; // 影响版本 一组版本
    resolvedBy: User;
    resolvedDate: Date;
    resolvedBuild: any; // 在哪个版本解决的
    resolution: string; // 解决方案 Enum {设计如此、重复ISSUE、外部原因、已解决、无法重现、延期处理、不予解决、转为需求 等}
    closedBy: User;
    closedDate: Date;

    remark?: string;

}
