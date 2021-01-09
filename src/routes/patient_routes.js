import ListPolyclinic from "pages/patient/ListPolyclinic";
import ListHealthAgency from "pages/patient/ListHealthAgency";
import Home from "pages/patient/Home";
import HealthAgencies from "pages/patient/HealthAgencies";
import HistoryWaitingList from "pages/patient/HistoryWaitingList";
import Polymasters from "pages/patient/Polyclinics";
import PolyclinicSchedule from "pages/patient/PolyclinicSchedules";
import BookWaitingList from "pages/patient/BookWaitingList";
import ListHAofPoly from "pages/patient/ListHAofPoly";
import ErrorPage from "../pages/404Pages/ErrorPage";
import UserProfile from "../pages/patient/UserProfile";
import SearchPageResult from "../pages/patient/SearchPageResult";

export const APP_PATIENT_ROUTE = [
  {
    name: "Home",
    path: "/pasien",
    exact: true,
    component: Home,
    private: true,
    isPasien: true,
  },
  {
    name: "List Polyclinic of Health Agency",
    path: "/pasien/list-poliklinik/:id_health_agency",
    exact: true,
    component: ListPolyclinic,
    private: true,
    isPasien: true,
  },
  {
    name: "List Health Agency of Polyclinic",
    path: "/pasien/puskesmas/:id_polymaster",
    exact: true,
    component: ListHAofPoly,
    private: true,
    isPasien: true,
  },
  {
    name: "All Health Agencies",
    path: "/pasien/puskesmas",
    exact: true,
    component: HealthAgencies,
    private: true,
    isPasien: true,
  },
  {
    name: "All Polyclinics",
    path: "/pasien/polimaster",
    exact: true,
    component: Polymasters,
    private: true,
    isPasien: true,
  },
  // {
  //   name: "Get Health Agency",
  //   path: "/pasien/puskesmas/:id_health_agency",
  //   exact: true,
  //   component: ListHealthAgency,
  //   private: true,
  //   isPasien: true,
  // },
  {
    name: "Show Ticket",
    path: "/pasien/riwayat-antrian",
    exact: true,
    component: HistoryWaitingList,
    private: true,
    isPasien: true,
  },
  {
    name: "Book Waiting List",
    path: "/pasien/book-waiting-list/:schedule_id/:date",
    exact: true,
    component: BookWaitingList,
    private: true,
    isPasien: true,
  },
  /*  {
    name: "Profile",
    path: "/pasien/profile/:user_id",
    exact: true,
    component: UserProfile,
    private: true,
    isPasien: true,
  },*/
  {
    name: "Profile",
    path: "/pasien/profile/",
    exact: true,
    component: UserProfile,
    private: true,
    isPasien: true,
  },
  {
    name: "Polyclinic Schedules",
    path: "/pasien/polyclinic-schedule/:id_health_agency",
    exact: true,
    component: PolyclinicSchedule,
    private: true,
    isPasien: true,
  },
  {
    name: "Book Waiting List",
    path: "/pasien/book-waiting-list/:schedule_id/:date",
    exact: true,
    component: BookWaitingList,
    private: true,
    isPasien: true,
  },
  {
    name: "",
    path: "/pasien/search/puskesmas/",
    exact: true,
    component: SearchPageResult,
    private: true,
    isPasien: true,
  },
  {
    name: "Error Page",
    path: "/pasien/*",
    exact: true,
    component: ErrorPage,
    private: true,
    isPasien: true,
    isNotFound: true,
  },
];
