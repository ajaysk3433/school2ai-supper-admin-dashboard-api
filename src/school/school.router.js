import express from "express";
import {
    getAllSchoolDetailsController,
    createNewSchoolController,
    updateSchoolFieldController,
    deleteSchoolController,
} from "./school.controller.js";
const router = express.Router();

router.get("/all-school-details", getAllSchoolDetailsController);
router.post("/create", createNewSchoolController);
router.patch("/update/:id", updateSchoolFieldController);
router.delete("/delete/:id", deleteSchoolController);

export default router;
