import Reseña from "../models/reseñas.model.js";

export const getReseñas = async (req, res) => {
  try {
    const reseñas = await reseñas.find({ user : req.user.id }).populate("user");
    res.json(reseñas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createReseñas = async (req, res) => {
  try {
    const { Reseña } = req.body;
    const newReseña = new Reseña({
      Reseña,
      user: req.user.id,
    });
    await newReseña.save();
    res.json(newReseña);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReseña = async (req, res) => {
  try {
    const deletedReseña = await Reseña.findByIdAndDelete(req.params.id);
    if (!deletedReseña)
      return res.status(404).json({ message: "Reseña not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateReseña = async (req, res) => {
  try {
    const { reseña } = req.body;
    const reseñaUpdated = await reseña.findOneAndUpdate(
      { _id: req.params.id },
      { reseña },
      { new: true }
    );
    return res.json(reseñaUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReseña = async (req, res) => {
  try {
    const reseña = await reseña.findById(req.params.id);
    if (!reseña) return res.status(404).json({ message: "Reseña not found" });
    return res.json(reseña);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};