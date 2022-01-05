const getInfo = (req, res) => {
  try {
    const { originalname, mimetype, size } = req.file;

    return res.status(200).send({ name: originalname, type: mimetype, size });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { getInfo };
