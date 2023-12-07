const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
    {
        coatOfArms: {
            type: String,
            required: true,
            trim: true, // Ensures the string is trimmed of any leading or trailing whitespace
        },
        titles: [String], // Changed to an array to accommodate multiple titles
        seat: {
            type: String,
            required: true,
            trim: true,
        },
        region: {
            type: String,
            required: true,
            trim: true,
        },
        head: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character",
            default: null, // Made optional with a default of null
        },
        heir: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character",
            default: null, // Optional
        },
        overlords: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "House",
            },
        ], // Array of references, optional
        vassals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "House",
            },
        ], // Optional
        religion: {
            type: String,
            required: true,
            trim: true,
        },
        founded: {
            type: Date,
            required: true,
            validate: {
                validator: (value) => value <= new Date(), // Validate that the founded date is not in the future
                message: "Founded date cannot be in the future.",
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("House", houseSchema);
