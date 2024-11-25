import React from 'react';

const AnalysisTable = ({ popularInterests = {}, totalDonated = 0 }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-md rounded-md transition duration-300">
      <h2 className="text-lg font-bold mb-4">Causas Más Populares</h2>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-700 p-2 bg-gray-100 dark:bg-gray-700">
              Causa
            </th>
            <th className="border border-gray-300 dark:border-gray-700 p-2 bg-gray-100 dark:bg-gray-700">
              Donaciones
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(popularInterests).map(([cause, count]) => (
            <tr key={cause}>
              <td className="border border-gray-300 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800">
                {cause}
              </td>
              <td className="border border-gray-300 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-800">
                {count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-md font-semibold mt-4">
        Monto Total Donado: €{totalDonated.toFixed(2)}
      </h3>
    </div>
  );
};

export default AnalysisTable;