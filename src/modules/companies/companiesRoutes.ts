import { Router } from 'express';
import bodyParser from 'body-parser';
import { Companies } from './companiesServices';
import { getCompaniesByIdParams } from './companiesDTO';

const companiesApp = Router();
companiesApp.use(bodyParser.json());

const companiesAppInstance = new Companies();

companiesApp.get(
    '/api/companies',
    async (req, res) => {
        try {
            let response = await companiesAppInstance.getCompanies();
            return res.status(200).send(response);
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)

companiesApp.get(
    '/api/companies/:companyId',
    async (req, res) => {
        try {
            const params: getCompaniesByIdParams = {
                id: req.params.companyId.toString()
            }

            if(!params.id) {
                return res.status(200).send({ message: 'Invalid Parameters!' });
            }

            let response = await companiesAppInstance.getCompaniesById(params);
            return res.status(200).send(response);
        }
        catch(e) {
            console.log(e)
            return res.status(400).send({ error: e });
        }
    }
)

export { companiesApp };
