import { database } from "../../config/datasources";
import camelcaseKeys from "camelcase-keys";
import { getCompaniesByIdParams } from "./companiesDTO";

export const getCompanies = async () => {
    let query = `SELECT * FROM companies`
    
    return database.query(query, []).then((result) => {
        return camelcaseKeys(result.rows);
    })
}

export const getCompaniesById = async (params: getCompaniesByIdParams) => {
    let query = `SELECT * FROM companies WHERE id = $1`
    
    return database.query(query, [params.id]).then((result) => {
        return camelcaseKeys(result.rows[0]);
    })
}