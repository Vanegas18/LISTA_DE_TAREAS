import List from "../Model/modelList.js";

// GET
export async function getAll(req, res) {
  try {
    const list = await List.find().lean();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json("Error al obtener la lista", error);
  }
}

// POST
export async function postList(req, res) {
  const { text } = req.body;
  try {
    const list = new List({ text });
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json("Error al crear una nueva tarea", error);
  }
}

// PUT
export async function putList(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const list = await List.findByIdAndUpdate(
      id,
      {
        text: text,
      },
      { new: true }
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json("Error al actualizar la tarea", error);
  }
}

// DELETE
export async function deleteList(req, res) {
  const { id } = req.params;
  try {
    await List.findByIdAndDelete(id);
    res.status(200).json("Tarea eliminada correctamente");
  } catch (error) {
    res.status(500).json("Error al eliminar la tarea", error);
  }
}
