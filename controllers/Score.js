var request = require('request');
var Score = require('../models/Score');
var Node = require('../models/Node');

var async = require('async');

exports.scorePost = function(req, res, next) {
    // req.body.name
    // req.body.score
    // req.body.node_id

    Node.findOne({id: req.body.node_id}, function(err, node) {
        if (err) {
            res.send(err);
            return;
        }

        if(node === null) {
            res.json("No corresponding node found.");
            return;
        }

        var score = new Score();
        score.score = req.body.score;
        score.name = req.body.name;
        score.node = node.toObject()._id;

        console.log(score);
       // save the score and check for errors
       score.save(function(err) {
           if (err) {
               res.send(err);
               console.log("Error during saving");
               return;
           }
           console.log("Score saved !");
           Node.update(
               { id: req.body.node_id },
               {$push: { 'scores' : score }},{upsert:true}, function(err, data) {
                   if (err){
                       res.send(err);
                       return;
                   }
                   res.json({ success: true });
            });
       });
   });
};


// ONLY FOR DEBUG
exports.setScoreToAllPost = function(req, res, next) {
    Node.find({ }, function(err, nodes) {
        async.each(nodes, function(node, callback) {
            var score = new Score({
                name: "Stupeflip",
                score: 4577,
                node: node._id
            });
            score.save(function(err) {
                var scores = [];
                scores.push(score);
                node.scores = scores;
                node.save(function(err) {
                    if(err) {
                        callback(err);
                        return;
                    }

                    callback();
                });
            });
        }, function(err) {
            if (err){
                res.send(err);
                return;
            }
            res.json("Success");
        });
    });

}
