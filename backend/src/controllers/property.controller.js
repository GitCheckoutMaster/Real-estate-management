import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Property from "../models/property.model.js";

const getProperties = asyncHandler(async (req, res) => {
    const properties = await Property.aggregate([
        {
            $sample: { size: 10 },
        }
    ]);

    if (!properties) {
        throw new ApiError(404, "No properties found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Properties fetched successfully", properties));
});

const getProperty = asyncHandler(async (req, res) => {
    const property = await Property.findById(req.params.id);

    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Property fetched successfully", property));
})

export {
    getProperties,
    getProperty,
}
