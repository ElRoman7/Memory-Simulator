
export interface Process{
  pid : number;
  name: string;
  size: number;
  partitionId?: number;
}
