import mongoose from "mongoose";
import ISurvey from "../interfaces/ISurvey";

const SurveySchema = new mongoose.Schema<ISurvey>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

const Survey = mongoose.model<ISurvey>("Survey", SurveySchema);
export { Survey };