const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        title: String, // Made optional
        shortBio: String,
        longBio: String,
        birthday: Date, // Optional
        birthPlace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Place", // Reference to Place model
        },
        mother: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character",
        },
        father: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character",
        },
        spouse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character",
            default: null,
        },
        children: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Character",
            },
        ],
        house: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "House", // Reference to House model
            default: null,
        },
        family: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Family", // Reference to Family model
            default: null,
        },
        age: Number,
        skills: [String],
        traits: [String],
        abilities: [String],
        dragonBlood: String,
        physicalAttributes: {
            height: String,
            eyeColor: String,
            // Add more as needed
        },
        personalityType: String,
        motivations: String,
        fears: String,
        goals: String,
        // Additional fields can be added as needed
    },
    { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
