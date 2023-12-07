const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            trim: true,
        },
        rulers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Character",
            },
        ],
        location: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Place",
        },
        religion: {
            type: String,
            required: true,
            trim: true,
        },
        millitaryStrength: {
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

module.exports = mongoose.model("Place", placeSchema);
