import axios from "axios";
const BASE_URL = "http://localhost:8000";

export const userRegisterService = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/user/register`, data);
  return res?.data;
};

export const userLoginService = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/user/login`, data);
  return res?.data;
};

export const adminLoginService = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/admin/login`, data);
  return res?.data;
};

export const createMasterPlan = async (data: any) => {
  const res = await axios.post(`${BASE_URL}/admin/create-master-plan`, data);
  return res?.data;
};

export const getMasterPlan = async () => {
  const res = await axios.get(`${BASE_URL}/admin/get-master-plan`);
  return res?.data;
};
export const deleteMasterPlan = async (id: any) => {
  const res = await axios.delete(`${BASE_URL}/admin/delete-master-plan/${id}`);
  return res?.data;
};

export const createMasterCourse = async (data: FormData) => {
  const res = await axios.post(`${BASE_URL}/admin/create-master-course`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res?.data;
};

export const getMasterCourse = async () => {
  const res = await axios.get(`${BASE_URL}/admin/get-master-course`);
  return res?.data;
};

export const deleteMasterCourse = async (id: any) => {
  const res = await axios.delete(`${BASE_URL}/admin/delete-master-course/${id}`);
  return res?.data;
};

export const getFile = async (fileName: string) => {
  const res = await axios.get(`${BASE_URL}/file/${fileName}`, {
    responseType: "blob",
  });
  return res?.data;
};
