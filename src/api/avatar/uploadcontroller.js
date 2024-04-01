const path = require('path');

exports.uploadImage = (req, res) => {
  // Lógica para manejar la carga de imágenes
  if (!req.file) {
    return res.status(400).json({ message: 'No se proporcionó ninguna imagen' });
  }
  
  const imageUrl = path.join(__dirname, '..', 'uploads', req.file.filename);
  // Aquí podrías guardar la referencia de la imagen en la base de datos
  // y enviar una respuesta adecuada al cliente
  return res.status(200).json({ imageUrl: imageUrl });
};
