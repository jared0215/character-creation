const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
    {
        coatOfArms: {
            type: String,
            required: true,
            trim: true,
        },
        titles: [String],
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
            default: null,
        },
        heir: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character",
            default: null,
        },
        overlords: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "House",
            },
        ],
        vassals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "House",
            },
        ],
        religion: {
            type: String,
            required: true,
            trim: true,
        },
        founded: {
            type: Date,
            required: true,
            validate: {
                validator: (value) => value <= new Date(),
                message: "Founded date cannot be in the future.",
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("House", houseSchema);
