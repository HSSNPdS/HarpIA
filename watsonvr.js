var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
	version: '2018-03-19',
	iam_apikey: 'rsI3xpZYJbSovD2raH6IP4or0D8g8MXL-S2oZbPAsRYI'
});

var images_file= fs.createReadStream('./azl1.jpeg');
var classifier_ids = ["Protótipo_133288788"];
var threshold = 0.6;

var params = {
	images_file: images_file,
	classifier_ids: classifier_ids,
	threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
	if (err) { 
		console.log(err);
	} else {
		console.log(JSON.stringify(response, null, 2))
	}
});