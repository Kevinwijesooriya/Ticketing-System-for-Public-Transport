import RouteSchedule from "../models/routeSchedule.js";

const routeScheduleController = {
  getOneRouteSchedule: async (req, res) => {
    const id = req.params.id;
    try {
      const post = await RouteSchedule.findOne({ _id: id });
      res.json({ message: "Route Schedule fetch success", data: post });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getRouteSchedules: async (req, res) => {
    try {
      const posts = await RouteSchedule.find();
      res.json({ message: "Route Schedules fetch success", data: posts });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  createRouteSchedule: async (req, res) => {
    try {
      const { userId, userName, title, description, image } = req.body;
      const ExistingPost = await RouteSchedule.findOne({ title });
      if (ExistingPost)
        return res.status(400).json({
          message:
            "Someone has a post with the same title. Please use another title.",
        });

      if (!title || !description || !image || !userId)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const newRouteSchedule = new RouteSchedule({
        userId,
        userName,
        title,
        description,
        image,
      });
      await newRouteSchedule.save();
      res.json({
        message: "Route Schedule create success",
        data: newRouteSchedule,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateRouteSchedule: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, description, image } = req.body;

      await RouteSchedule.findOneAndUpdate(
        { _id: id },
        { title, description, image }
      );
      res.json({
        message: "Route Schedule update success",
        data: { title, description, image },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteRouteSchedule: async (req, res) => {
    try {
      const id = req.params.id;

      await RouteSchedule.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

export default routeScheduleController;
