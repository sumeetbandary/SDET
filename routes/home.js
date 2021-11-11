var express = require("express");
var router = express.Router();
var fs = require("fs");

const homecontent =
	"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

/* GET home page. */
router.get("/", function (req, res, next) {
	// for (let i = 0; i < arr.length; i++) {
	// 	res.render("blog/home", { title: arr[i].title, article: arr[i].article });
	// }
	var data = fs.readFileSync("public/posts.json");
	var post = JSON.parse(data);
	console.log(typeof post);
	res.render("blog/home", {
		homecontent: homecontent,
		post: post,
	});
});

module.exports = router;
