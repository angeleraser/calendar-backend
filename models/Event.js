const { Schema, model } = require("mongoose");
const EventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId, // para usar un esquema creado anteriormente
    ref: "User",
    required: true,
  },
});
const eventToJson = () => {
  return function () {
    const { __v, _id, ...rest } = this.toObject();
    rest.id = _id;
    return {
      ...rest,
    };
  };
};
EventSchema.method("toJSON", eventToJson());
module.exports = model("Event", EventSchema);
