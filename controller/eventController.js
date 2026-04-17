const Event = require("../models/event.model");
exports.create = async (req, res) => {
  const { name, date, capacity } = req.body;
  try {
    const event = await Event.create({
      name,
      date,
      capacity,
      availableSeats: capacity,
    });

    res.status(201).json(event);
  } catch (err) {
    return res.status(500).json({ message: `Server error :${err.message}` });
  }
};

exports.getEvents = async (req, res) => {
  const { start, end, page = 1, limit = 10 } = req.query;
  try {
    let filter = {};
    if (start && end) {
      filter.date = {
        $gte: new Date(start),
        $lte: new Date(end),
      };
    }
const events = await Event.find(filter)
  .skip((page - 1) * limit)
  .limit(parseInt(limit));
    return res.status(200).json(events);
  } catch (err) {
    return res.status(500).json({ message: `Server error :${err.message}` });
  }
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, date, capacity } = req.body;
  try {
    const updateEvents = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateEvents);
  } catch (err) {
    return res.status(500).json({ message: `Server error :${err.message}` });
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event_list = await Event.findById(id);
    if (!event_list) {
      return res.staus(404).json({ message: "Event is not exists" });
    }
    const eventDelete = await Event.findByIdAndDelete(id);
    return res.status(200).json({ message: "Deleted" });
  } catch (err) {
    return res.status(500).json({ message: `Server error :${err.message}` });
  }
};
