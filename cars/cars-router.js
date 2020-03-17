const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve fruits" });
      });
  });

router.get("/:id", (req, res) => {
    db("cars")
    .where({id: req.params.id})
    .first()
    .then(car => {
        if(car) {
            res.status(200).json({data: car})
        } else {
            res.status(404).json({message: "no car with given id found"})
        }
    })
    .catch(err => {
        res.status(500).json({err: "server error getting posts"})
    })
});

router.post("/", (req, res) => {
    const carData = req.body
    db("cars")
    .insert(carData)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
      })
      .catch (err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
    });  

router.put("/:id", (req, res) => {
    const carData = req.body
    db("cars")
    .where({ id: req.params.id })
    .update(carData)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "record updated successfully" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "sorry, ran into an error" });
    });

})    

router.delete("/:id", (req, res) => {
    db("cars")
    .where({ id: req.params.id })
    .del()
    .then(car => {
        if(car) {
            res.status(200).json({message: "car deleted successfully"})
        } else {
            res.status(404).json({ message: "car not found" });
        }
    })
    .catch(err => {
        res.status(500).json({err: "server error deleting car"})
    })
})

 



module.exports = router;