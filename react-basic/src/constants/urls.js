/*
  Ini constant Url, buat ngedefine Url rest API biasa
*/

const BASE_URL = "http://localhost:8000/api";

export const LOGIN_API =  `${BASE_URL}/auth/login`;
export const REGISTER_API =  `${BASE_URL}/auth/register`;

export const GET_FILMS = "https://ghibliapi.herokuapp.com/films";

export const GET_POLYCLINIC_OF_HA = (id_health_agency) => `${BASE_URL}/admin/health-agency/${id_health_agency}/polyclinic`;