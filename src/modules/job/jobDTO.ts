export interface jobDTO {
    id: string;
    companyId: string;
    title: string;
    description: string;
    location: string;
    notes: string;
    status: string;
}

export interface createJobDTO {
    companyId: string;
    title: string;
    description: string;
    location: string;
    notes: string;
}

export interface editJobDTO {
    title: string;
    description: string;
    location: string;
}

export interface publishJobParamsDTO {
    jobId: string;
}