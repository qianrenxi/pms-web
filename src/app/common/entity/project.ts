import { Product } from './product';

export class Project {
    id: number;
    name: string;
    code: string;

    startDate?: Date;
    endDate?: Date;

    workingDays?: number;
    teamName?: string;
    type?: string; // [短期项目，长期项目， 运维项目等，或者换成其他维度]
    product?: Product; // 这里设计成多对一的上下级形式，简化关系
    description?: string;
    // 访问控制规则 accessControl
}
