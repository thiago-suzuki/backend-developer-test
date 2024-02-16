import { getCompaniesByIdParams } from './companiesDTO';
import { getCompanies, getCompaniesById } from './companiesQueries'

export class Companies {
    async getCompanies() {
        return await getCompanies();
    }

    async getCompaniesById(params: getCompaniesByIdParams) {
        return await getCompaniesById(params);
    }
}