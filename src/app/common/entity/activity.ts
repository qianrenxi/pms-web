export class Activity {
    id: number;
    user: {id: number, displayName: string};
    time: Date;
    operation: string;
    object: {id: number, name: string, type: string};
    comment: string;
}
