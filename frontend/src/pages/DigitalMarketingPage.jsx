import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({
    reason: '',
    satisfaction: '',
    update_preference: '',
    appreciation: '',
    content_preference: '',
    other_reason: '',
    other_content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/feedback', formData);
      toast.success('¡Formulario enviado exitosamente!');
      setFormData({
        reason: '',
        satisfaction: '',
        update_preference: '',
        appreciation: '',
        content_preference: '',
        other_reason: '',
        other_content: '',
      });
    } catch (error) {
      toast.error('Error al enviar el formulario.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition duration-300 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Marketing Digital</h1>
      <p className="text-lg mb-6">
        Te ayudamos a llegar a más clientes mediante estrategias efectivas de marketing digital.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-md shadow-md transition duration-300"
      >
        {/* Primera Pregunta */}
        <div>
          <label className="block font-medium mb-2">¿Qué te motivó a donar a nuestra causa?</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Interés en ayudar a la causa específica.">
              Interés en ayudar a la causa específica.
            </option>
            <option value="Valores personales de solidaridad.">Valores personales de solidaridad.</option>
            <option value="Referencia de alguien cercano.">Referencia de alguien cercano.</option>
            <option value="Otro">Otro</option>
          </select>
          {formData.reason === 'Otro' && (
            <input
              type="text"
              name="other_reason"
              placeholder="Especifica"
              value={formData.other_reason}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          )}
        </div>

        {/* Segunda Pregunta */}
        <div>
          <label className="block font-medium mb-2">
            ¿Qué tan satisfecho estás con la información que recibes sobre cómo se usan tus donaciones?
          </label>
          <select
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy satisfecho">Muy satisfecho</option>
            <option value="Satisfecho">Satisfecho</option>
            <option value="Insatisfecho">Insatisfecho</option>
            <option value="Muy insatisfecho">Muy insatisfecho</option>
          </select>
        </div>

        {/* Tercera Pregunta */}
        <div>
          <label className="block font-medium mb-2">
            ¿Prefieres recibir actualizaciones sobre el impacto de tu donación?
          </label>
          <select
            name="update_preference"
            value={formData.update_preference}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Correo electrónico">Correo electrónico</option>
            <option value="Redes sociales">Redes sociales</option>
            <option value="Mensajes personalizados">Mensajes personalizados</option>
            <option value="No me interesa recibir actualizaciones">
              No me interesa recibir actualizaciones
            </option>
          </select>
        </div>

        {/* Cuarta Pregunta */}
        <div>
          <label className="block font-medium mb-2">
            ¿Qué tan importante es para ti recibir agradecimientos personalizados?
          </label>
          <select
            name="appreciation"
            value={formData.appreciation}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy importante">Muy importante</option>
            <option value="Algo importante">Algo importante</option>
            <option value="Poco importante">Poco importante</option>
            <option value="No es importante">No es importante</option>
          </select>
        </div>

        {/* Quinta Pregunta */}
        <div>
          <label className="block font-medium mb-2">
            ¿Qué tipo de contenido te gustaría recibir de nosotros?
          </label>
          <select
            name="content_preference"
            value={formData.content_preference}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Historias personales de beneficiarios">
              Historias personales de beneficiarios
            </option>
            <option value="Estadísticas e informes de impacto">Estadísticas e informes de impacto</option>
            <option value="Oportunidades para participar más activamente">
              Oportunidades para participar más activamente
            </option>
            <option value="Otro">Otro</option>
          </select>
          {formData.content_preference === 'Otro' && (
            <input
              type="text"
              name="other_content"
              placeholder="Especifica"
              value={formData.other_content}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          )}
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default DigitalMarketingPage;