import Cat from "../models/cat.model.js";

const findAll = (req, res) => {
  Cat.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cats.",
      });
    else res.json(data);
    console.log(data);
  });
};

const create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Cat
  const cat = new Cat({
    name: req.body.name,
    image: req.body.image,
  });

  // Save Cat in the database
  Cat.create(cat, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.json(data);
  });
};

export { findAll, create };
