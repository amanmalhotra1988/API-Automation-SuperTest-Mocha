import request = require('supertest');

export const getRequest = async (baseUrl: string, apiEndPoint: string, headers: object) => {
    try {
        const response = await request(baseUrl).get(apiEndPoint).retry(2).set(headers);
        return response;
    } catch (error) {
        throw new Error('Error in GET Request: ' + error);
    }
};
export const postRequest = async (baseUrl: string, apiEndPoint: string, headers: object, requestBody: object) => {
    try {
        const response = await request(baseUrl).post(apiEndPoint).retry(2).set(headers).send(requestBody);
        return response;
    } catch (error) {
        throw new Error('Error in POST Request: ' + error);
    }
};
export const putRequest = async (baseUrl: string, apiEndPoint: string, headers: object, requestBody: object) => {
    try {
        const response = await request(baseUrl).put(apiEndPoint).retry(2).set(headers).send(requestBody);
        return response;
    } catch (error) {
        throw new Error('Error in PUT Request: ' + error);
    }
};
export const deleteRequest = async (baseUrl: string, apiEndPoint: string, headers: object) => {
    try {
        const response = await request(baseUrl).delete(apiEndPoint).retry(2).set(headers);
        return response;
    } catch (error) {
        throw new Error('Error in DELETE Request: ' + error);
    }
};