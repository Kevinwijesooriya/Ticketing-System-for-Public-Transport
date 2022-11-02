import { Router } from "express";
const routeScheduleRoute = Router();
import routeScheduleController from "../controllers/routeSchedule.js";

routeScheduleRoute.get(
  "/api/routeSchedule/get/:id",
  routeScheduleController.getOneRouteSchedule
);
routeScheduleRoute.get(
  "/api/routeSchedule/getAll",
  routeScheduleController.getRouteSchedules
);
routeScheduleRoute.post(
  "/api/routeSchedule/create",
  routeScheduleController.createRouteSchedule
);
routeScheduleRoute.put(
  "/api/routeSchedule/update/:id",
  routeScheduleController.updateRouteSchedule
);
routeScheduleRoute.delete(
  "/api/routeSchedule/delete/:id",
  routeScheduleController.deleteRouteSchedule
);

export default routeScheduleRoute;
