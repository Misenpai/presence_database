export interface RequestInfo {
  requestedAt: number;
}

export interface SubmittedData {
  [key: string]: any[];  
}

export const hrRequests: Record<string, Record<string, RequestInfo>> = {};
export const submittedData: Record<string, Record<string, SubmittedData>> = {};
