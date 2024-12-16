import Testimonial from "../models/testimonialModel.js";

// Create a new testimonial
export const createTestimonial = async (req, res) => {
  try {
    const { userId, comment, status } = req.body;
    if (!userId ||!comment ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const testimonial = new Testimonial({ userId, comment, status });
    await testimonial.save();

    res.status(201).json({ message: 'Testimonial created successfully', testimonial });
  } catch (error) {
    res.status(500).json({ error: 'Error creating testimonial', details: error.message });
  }
};

// Retrieve all testimonials
export const getAllTestimonials = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};

    const testimonials = await Testimonial.find(filter).populate('userId', 'firstname lastname profilePic address').sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching testimonials', details: error.message });
  }
};

// Retrieve a single testimonial by ID
export const getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findById(id).populate('userId');
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching testimonial', details: error.message });
  }
};

// Update a testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment, status } = req.body;

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      { comment, status },
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.status(200).json({ message: 'Testimonial updated successfully', testimonial });
  } catch (error) {
    res.status(500).json({ error: 'Error updating testimonial', details: error.message });
  }
};

// Delete a testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting testimonial', details: error.message });
  }
};