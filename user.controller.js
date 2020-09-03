const User = require('./user.model');

module.exports = {
  async create(request, h) {
    try {
      const user = new User(request.payload);

      var result = await user.save();
      return h.response(result);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
  async find(request, h) {
    try {
      const user = await User.find().exec();
      return h.response(user);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
  async findOne(request, h) {
    try {
      const user = await User.findById(request.params.id).exec();
      return h.response(user);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
  async update(request, h) {
    try {
      var user = await User.findByIdAndUpdate(
        request.params.id,
        request.payload,
        { new: true }
      );
      return h.response(`your database has been submitted Safely:  ${user}`);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
  async delete(request, h) {
    try {
      var result = await User.findByIdAndDelete(request.params.id);
      return h.response({
        msg: `company deleted with id: ${request.params.id}`,
      });
    } catch (error) {
      return h.response(error).code(500);
    }
  },
};