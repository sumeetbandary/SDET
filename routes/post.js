var express = require("express");
var _ = require("lodash");
var router = express.Router();
var fs = require("fs");

router.get("/:routeparmeter", (req, res) => {
	const titleName = req.params.routeparmeter; //Fetching the routeparmeter and storing in titleName

	var data = fs.readFileSync("public/posts.json"); //Reading posts.json file and storing the content in data variable
	var posts = JSON.parse(data); //Converting the stringify to JSON and storing in posts

	// Looping the post_array in the posts object and checking if the title name mactched with titleName
	Array.from(posts.post_array).forEach(function (element) {
		if (_.toLower(titleName) === _.toLower(element.title)) {
			res.render("blog/post", {
				title: element.title,
				description: element.description,
				content: element.content,
				author: element.author
			});
		}
	});
	console.log("Done searching");
});

module.exports = router;
