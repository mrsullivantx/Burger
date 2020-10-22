const express = require("express");

const router = express.Router();


const burger = require("../models/burger.js");


router.get("/", (req, res) => {
    burger.all((data) => {
        const viewData = {
            burger: data
        };
        console.log(viewData);
        res.render("index", viewData);
    });
});

router.post("/api/burger", (req, res) => {
    burger.create(["name", "devour"], [req.body.name, req.body.devour], (result) => {

        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", (request, response) => {
    const condition = { id: request.params.id };

    console.log("condition", condition);

    burger.update({ devour: request.body.devour }, condition, (result) => {
        if (result.changedRows == 0) {

            return response.status(404).end();
        }
        response.status(200).end();
    });
});

router.delete("/api/burger/:id", (request, response) => {
    const condition = { id: request.params.id };

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {

            return response.status(404).end();
        }
        response.status(200).end();
    });
});


module.exports = router;