import { motion } from 'motion/react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TrendingUp, DollarSign, Calendar } from 'lucide-react';

const transactionsByMethod = [
  { name: 'Nequi', value: 45, color: '#7863fe' },
  { name: 'Daviplata', value: 30, color: '#79e5f2' },
  { name: 'QR', value: 25, color: '#8B5CF6' },
];

const monthlyData = [
  { month: 'Ene', total: 2400 },
  { month: 'Feb', total: 3200 },
  { month: 'Mar', total: 2800 },
  { month: 'Abr', total: 4100 },
];

const recentTransactions = [
  { id: 'NEQ-7392', cliente: 'Juan Pérez', monto: 45000, metodo: 'Nequi', fecha: '14 Abr 2026' },
  { id: 'DAV-5281', cliente: 'María García', monto: 32000, metodo: 'Daviplata', fecha: '14 Abr 2026' },
  { id: 'QR-9483', cliente: 'Carlos Ruiz', monto: 78000, metodo: 'QR', fecha: '13 Abr 2026' },
  { id: 'NEQ-8372', cliente: 'Ana López', monto: 25000, metodo: 'Nequi', fecha: '13 Abr 2026' },
  { id: 'DAV-6291', cliente: 'Pedro Martínez', monto: 52000, metodo: 'Daviplata', fecha: '12 Abr 2026' },
];

export function Dashboard() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#79e5f2] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tu Dashboard de <span className="text-[#79e5f2]">Reportes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Visualiza todos tus cobros digitales en un solo lugar
          </p>
        </motion.div>

        {/* Summary cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: DollarSign, label: 'Total del mes', value: '$12.5M', change: '+23%', color: '#7863fe' },
            { icon: TrendingUp, label: 'Transacciones', value: '245', change: '+12%', color: '#79e5f2' },
            { icon: Calendar, label: 'Promedio diario', value: '$416K', change: '+8%', color: '#8B5CF6' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#13131a] border border-gray-800 rounded-2xl p-6 hover:border-[#7863fe]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-white text-3xl font-bold">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Charts section */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pie chart - Transactions by method */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#13131a] border border-gray-800 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl text-white mb-6 font-medium">Transacciones por método</h3>
            <div className="w-full h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={transactionsByMethod}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius="70%"
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {transactionsByMethod.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 10, 15, 0.75)',
                      border: '1px solid #7863fe',
                      borderRadius: '12px',
                      color: '#fff',
                      backdropFilter: 'blur(8px)',
                    }}
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
              {transactionsByMethod.map((method, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: method.color }}
                  />
                  <span className="text-gray-400 text-sm">{method.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bar chart - Monthly totals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#13131a] border border-gray-800 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl text-white mb-6 font-medium">Ingresos mensuales</h3>
            <div className="w-full h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 10, 15, 0.75)',
                      border: '1px solid #79e5f2',
                      borderRadius: '12px',
                      color: '#fff',
                      backdropFilter: 'blur(8px)',
                    }}
                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    formatter={(value) => [`$${value}K`, 'Total']}
                  />
                  <Bar dataKey="total" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7863fe" />
                      <stop offset="100%" stopColor="#79e5f2" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-around mt-4">
              {monthlyData.map((data, index) => (
                <span key={index} className="text-gray-400 text-sm">
                  {data.month}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent transactions table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#13131a] border border-gray-800 rounded-3xl p-6 md:p-8 overflow-hidden"
        >
          <h3 className="text-xl md:text-2xl text-white mb-6 font-medium">Últimos cobros</h3>
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="inline-block min-w-full align-middle px-6 md:px-0">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium pb-4 pr-2 md:pr-4 whitespace-nowrap">ID</th>
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium pb-4 pr-2 md:pr-4 whitespace-nowrap">Cliente</th>
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium pb-4 pr-2 md:pr-4 whitespace-nowrap">Monto</th>
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium pb-4 pr-2 md:pr-4 whitespace-nowrap">Método</th>
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium pb-4 whitespace-nowrap">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-gray-800/50 hover:bg-[#1a1a24] transition-colors"
                    >
                      <td className="py-3 md:py-4 pr-2 md:pr-4">
                        <span className="text-gray-400 text-xs md:text-sm font-mono">{transaction.id}</span>
                      </td>
                      <td className="py-3 md:py-4 pr-2 md:pr-4">
                        <span className="text-white text-xs md:text-base whitespace-nowrap">{transaction.cliente}</span>
                      </td>
                      <td className="py-3 md:py-4 pr-2 md:pr-4">
                        <span className="text-white text-xs md:text-base font-medium whitespace-nowrap">
                          ${transaction.monto.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-3 md:py-4 pr-2 md:pr-4">
                        <span
                          className="inline-block px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap"
                          style={{
                            backgroundColor:
                              transaction.metodo === 'Nequi'
                                ? '#7863fe20'
                                : transaction.metodo === 'Daviplata'
                                ? '#79e5f220'
                                : '#8B5CF620',
                            color:
                              transaction.metodo === 'Nequi'
                                ? '#7863fe'
                                : transaction.metodo === 'Daviplata'
                                ? '#79e5f2'
                                : '#8B5CF6',
                          }}
                        >
                          {transaction.metodo}
                        </span>
                      </td>
                      <td className="py-3 md:py-4">
                        <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap">{transaction.fecha}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
