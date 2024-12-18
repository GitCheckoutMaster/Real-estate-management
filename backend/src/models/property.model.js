import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    media: {
        type: [String],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Property = mongoose.model("Property", propertySchema);

export default Property;
