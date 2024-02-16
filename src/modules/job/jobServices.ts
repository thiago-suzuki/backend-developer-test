import { Companies } from "../companies/companiesServices";
import { createJobDTO, editJobDTO, jobDTO, publishJobParamsDTO } from "./jobDTO";
import { archiveJob, createJob, deleteJob, editJob, getJobById, publishJob } from "./jobQueries";
import { validate as isValidUUID } from 'uuid'

export class Job {
    private companyService = new Companies();

    async createJob(job: createJobDTO) {
        let newJob: jobDTO = {
            id: "", 
            companyId: "",
            title: "",
            description: "",
            location: "",
            notes: "",
            status: "draft"
        };
        newJob.companyId = job.companyId || "";
        newJob.description = job.description || "";
        newJob.location = job.location || "";
        newJob.notes = job.notes || "";
        newJob.title = job.title || "";

        if(!this.validateJob(newJob)) {
            throw "Parâmetros inválidos!";
        }

        let company = await this.companyService.getCompaniesById({ id: newJob.companyId });
        
        if(company) {
           newJob.companyId = company.id 
        }
        else {
            throw "Não existe nenhuma compania com esse id";
        }

        await createJob(newJob)
    }

    validateJob(job: jobDTO) {
        if(job.companyId === "") {  return false; }
        if(!isValidUUID(job.companyId)) {  return false; }
        if(job.title === "") {  return false; }
        if(job.description === "") {  return false; }
        if(job.location === "") { return false; }
        if(job.notes == "") {  return false; }
        if(job.title == "") { return false; }
        return true;
    }

    async publishJob(params: publishJobParamsDTO) { 
        let job: jobDTO = await getJobById(params.jobId);

        if(job && job.status == 'draft') {
            await publishJob(params.jobId)
        }
        else {
            throw `Job is ${job.status} or invalid`
        }
    }

    async editJob(id: string, content: editJobDTO) {
        let job: jobDTO = await getJobById(id);

        if(job && job.status == 'draft') {
            await editJob(id, content)
        }
        else {
            throw `Job is ${job.status} or invalid`
        }
    }

    async deleteJob(params: publishJobParamsDTO) {
        let job: jobDTO = await getJobById(params.jobId);

        if(job && job.status == 'draft') {
            await deleteJob(params.jobId)
        }
        else {
            throw `Job is ${job.status} or invalid`
        }
    }

    async archiveJob(params: publishJobParamsDTO) { 
        let job: jobDTO = await getJobById(params.jobId);

        if(job && job.status == 'published') {
            await archiveJob(params.jobId)
        }
        else {
            throw `Job is ${job.status} or invalid`
        }
    }
}