import express from "express";
import {
    getAllSchoolDetailsController,
    createNewSchoolController,
} from "./school.controller.js";
const router = express.Router();

router.get("/all-school-details", getAllSchoolDetailsController);
router.post("/create", createNewSchoolController);

export default router;
