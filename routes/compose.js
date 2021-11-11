var express = require("express");
var fs = require("fs");
var router = express.Router();

const contactContent =
	"Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

var posts = [];
/* GET contact page. */
router.get("/", function (req, res, next) {
	res.render("blog/compose");
});

router.post("/", function (req, res) {
	var obj = {
		title: req.body.title,
		article: req.body.article,
	};
	fs.readFile("public/posts.json", function (err, data) {
		if (err) {
			console.log(err);
		} else {
			var data = JSON.parse(data);
			data.post_array.push(obj);

			const json = JSON.stringify(data);
			fs.writeFile("public/posts.json", json, function (err) {
				if (err) console.log(err);
				else {
					console.log("Done");
				}
			});
		}
	});
	res.redirect("/");
});
module.exports = router;
