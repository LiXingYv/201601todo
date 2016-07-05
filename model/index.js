var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/lxytodo');
//定义一个模型并导出
module.exports = mongoose.model('todo',mongoose.Schema({
    text:String
}));