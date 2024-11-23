import React from 'react'

const AnalysisTable = ({popularInterests, totalDonated}) => {
  return (
    <div>
        <h2>Causas más populares</h2>
        <table>
            <thead>
                <tr>
                    <th>Causa</th>
                    <th>Donaciones</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(popularInterests).map(([cause, count]) => (
                    <tr key={cause}>
                        <td>{cause}</td>
                        <td>{count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h3>Total donado: ${totalDonated.toFixed(2)}</h3>
    </div>
  )
}

export default AnalysisTable