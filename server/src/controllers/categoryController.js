import deleteImageFromCloudinary from "../helper/deleteImage.js";
import uploadImageToCloudinary from "../helper/uploadImageToCloudinary.js";
import Category from "../models/categoryModel.js";
import Package from "../models/packageModel.js";
import TourMap from "../models/tourMapModel.js";


export const createCategory = async (req, res) => {
  try {
    const { name, status } = req.body;
    const file = req.files?.image;

    if (!name || !file) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check if category name already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category with this name already exists.",
      });
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(file);

    // Create new category
    const newCategory = new Category({
      name,
      image: imageUrl,
      status,
    });

    await newCategory.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully.",
      data: newCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};


export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const file = req.files?.image;

    // Find the existing category
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    // Handle image update if a new image is provided
    let newImageUrl = category.image;
    if (file) {
      // Delete existing image from Cloudinary
      await deleteImageFromCloudinary(category.image);

      // Upload new image to Cloudinary
      newImageUrl = await uploadImageToCloudinary(file);
    }

    // Update category in the database
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        ...update,
        image: newImageUrl,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating category.",
      error: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the existing category
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    // Delete the category image from Cloudinary
    await deleteImageFromCloudinary(category.image);

    // Delete category from the database
    await Category.findByIdAndDelete(id);

    // Delete associated packages and tour maps
    const deletedPackages = await Package.deleteMany({ categoryId: id });
    const deletedTourMaps = await TourMap.deleteMany({ categoryId: id });

    res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
      data: {
        deletedCategory: category,
        deletedPackagesCount: deletedPackages.deletedCount,
        deletedTourMapsCount: deletedTourMaps.deletedCount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting category.",
      error: error.message,
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { name } = req.query;

    const query = name ? { name: new RegExp(`^${name}$`, "i") } : {};
    const categories = await Category.find(query);

    if (name && categories.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No categories not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Categories retrieved successfully.",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving categories.",
      error: error.message,
    });
  }
};


