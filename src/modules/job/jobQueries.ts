import { database } from "../../config/datasources";
import camelcaseKeys from "camelcase-keys";
import { editJobDTO, jobDTO } from "./jobDTO";

export const createJob = async (job: jobDTO) => {
    let params = [
        job.companyId,
        job.description,
        job.location,
        job.notes,
        job.status,
        job.title
    ]

    let query = `
        INSERT INTO jobs(company_id, description, location, notes, status, title)
        VALUES($1, $2, $3, $4, $5, $6)
    `

    return database.query(query, params).then((result) => {
        return camelcaseKeys(result.rows);
    })
}

export const getJobById = async (jobId: string) => {
    let query = `SELECT * FROM jobs WHERE id = $1`;

    return database.query(query, [jobId]).then((result) => {
        return camelcaseKeys(result.rows[0]);
    })
}

export const publishJob = async (jobId: string) => {
    let query = `UPDATE jobs SET status = 'published', updated_at = now() WHERE id = $1`;

    return database.query(query, [jobId]).then((result) => {
        return camelcaseKeys(result.rows);
    })
}

export const editJob = async (id: string, content: editJobDTO) => {
    let params = [
        id,
        content.title,
        content.description,
        content.location
    ]

    let query = `
        UPDATE jobs SET 
        title = $2,
        description = $3,
        location = $4, 
        updated_at = now()
        WHERE id = $1
    `;

    return database.query(query, params).then((result) => {
        return camelcaseKeys(result.rows);
    })
}

export const deleteJob = async (jobId: string) => {
    let query = `DELETE FROM jobs WHERE id = $1`;

    return database.query(query, [jobId]).then((result) => {
        return camelcaseKeys(result.rows);
    })
}

export const archiveJob = async (jobId: string) => {
    let query = `UPDATE jobs SET status = 'archived', updated_at = now() WHERE id = $1`;

    return database.query(query, [jobId]).then((result) => {
        return camelcaseKeys(result.rows);
    })
}