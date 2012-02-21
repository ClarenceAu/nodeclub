var Jscex = require("jscex");
require("jscex-jit").init(Jscex);
require("jscex-async").init(Jscex);
require("Jscex-async-powerpack").init(Jscex);

var Jscexify = Jscex.Async.Jscexify;

var mongoose = require("mongoose");

var mp = mongoose.Model.prototype;
mp.saveAsync = Jscexify.fromStandard(mp.save);
mp.removeAsync = Jscexify.fromStandard(mp.remove);

var m = mongoose.Model;
m.findByIdAsync = Jscexify.fromStandard(m.findById);
m.findOneAsync = Jscexify.fromStandard(m.findOne);
m.findAsync = Jscexify.fromStandard(m.find);
m.countAsync = Jscexify.fromStandard(m.count);

exports.Jscex = Jscex;
