import React from 'react'

const AnalysisTable = ({popularInterests = {}, totalDonated = 0}) => {
    return (
        <div style={{ margin: '20px' }}>
          <h2>Causas Más Populares</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Causa</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Donaciones</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(popularInterests).map(([cause, count]) => (
                <tr key={cause} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>{cause}</td>
                  <td style={{ padding: '10px' }}>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ marginTop: '20px' }}>Monto Total Donado: €{totalDonated.toFixed(2)}</h3>
        </div>
      );
}

export default AnalysisTable