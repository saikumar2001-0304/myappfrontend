import axios from "axios"
const REST_API_LIST_URL="http://localhost:9898/person/list";

const REST_API_GET_URL="http://localhost:9898/person";
const REST_API_SAVE_URL="http://localhost:9898/person/save";

const REST_API_UPDATE_URL="http://localhost:9898/person/update";

const REST_API_Income_URL="http://localhost:9898/person/income";

const REST_API_GST_URL="http://localhost:9898/person/gst";
const REST_API_TOTAL_URL="http://localhost:9898/person/total";
const REST_API_GST_LIST_URL="http://localhost:9898/person/gstList";
const REST_API_INCOME_LIST_URL="http://localhost:9898/person/incomeList";
const REST_API_GETNAME_URL="http://localhost:9898/person/get";

export const listPersons=()=>axios.get(REST_API_LIST_URL);

export const getPerson=(personId)=>axios.get(REST_API_GET_URL+"/"+personId);

export const createPerson=(person,type)=>axios.post(REST_API_SAVE_URL+"/"+type,person);

export const updatePerson=(personId,person)=>axios.put(REST_API_UPDATE_URL+"/"+personId,person);

export const countIncome=()=>axios.get(REST_API_Income_URL);
export const countGst=()=>axios.get(REST_API_GST_URL);
export const totalCount=()=>axios.get(REST_API_TOTAL_URL);
export const listGst=()=>axios.get(REST_API_GST_LIST_URL);
export const listIncome=()=>axios.get(REST_API_INCOME_LIST_URL);
export const getName=(Name)=>axios.get(REST_API_GETNAME_URL+"/"+Name);

