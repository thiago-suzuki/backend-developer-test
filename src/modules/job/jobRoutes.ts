import { Router } from 'express';
import bodyParser from 'body-parser';
import { Job } from './jobServices';
import { createJobDTO, editJobDTO, publishJobParamsDTO } from './jobDTO';

const jobApp = Router();
jobApp.use(bodyParser.json());

const jobAppInstance = new Job();

jobApp.post(
    '/api/job',
    async (req, res) => {
        try {
            const params: createJobDTO = {
                companyId: req.body.companyId,
                description: req.body.description,
                location: req.body.location,
                notes: req.body.notes,
                title: req.body.title,
            }

            if(
                !params.companyId || 
                !params.description ||
                !params.location ||
                !params.notes ||
                !params.title
            ) {
                return res.status(200).send({ message: 'Invalid Parameters!' });
            }


            await jobAppInstance.createJob(params)
            return res.status(200).send('Job created successfully')
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)

jobApp.put(
    '/api/job/:jobId/publish',
    async (req, res) => {
        try {
            const params: publishJobParamsDTO = {
                jobId: req.params.jobId
            }

            if(!params.jobId) {
                return res.status(200).send({ message: 'Invalid Parameters!' });
            }

            await jobAppInstance.publishJob(params)
            return res.status(200).send('Job published successfully')
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)

jobApp.put(
    '/api/job/:jobId',
    async (req, res) => {
        try {
            const paramsPath: publishJobParamsDTO = {
                jobId: req.params.jobId
            }

            const params: editJobDTO = {
                description: req.body.description,
                location: req.body.location,
                title: req.body.title
            }

            if(!paramsPath.jobId) {
                return res.status(200).send({ message: 'Invalid Parameters of Path!' });
            }

            if(
                !params.description ||
                !params.location ||
                !params.title
            ) {
                return res.status(200).send({ message: 'Invalid Parameters!' });
            }

            await jobAppInstance.editJob(paramsPath.jobId, params)
            return res.status(200).send('Job edited successfully')
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)

jobApp.delete(
    '/api/job/:jobId',
    async (req, res) => {
        try {
            const params: publishJobParamsDTO = {
                jobId: req.params.jobId
            }

            if(!params.jobId) {
                return res.status(200).send({ message: 'Invalid Parameters!' });
            }

            await jobAppInstance.deleteJob(params)
            return res.status(200).send('Job deleted successfully')
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)

jobApp.put(
    '/api/job/:jobId/archive',
    async (req, res) => {
        try {
            const params: publishJobParamsDTO = {
                jobId: req.params.jobId
            }

            if(!params.jobId) {
                return res.status(200).send({ message: 'Invalid Parameters!' });
            }

            await jobAppInstance.archiveJob(params)
            return res.status(200).send('Job archived successfully')
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)


export { jobApp }