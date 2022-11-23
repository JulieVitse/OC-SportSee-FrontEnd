import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { SessionsProps } from 'types/components.types';

export function AverageSessionsChart({ sessionsData }: SessionsProps) {
    return (
      <ResponsiveContainer width="33%" height={260}>
        <LineChart
          width={260}
          height={260}
          data={sessionsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis
            hide={true}
            domain={['dataMin - 10', 'dataMax + 10']}
            dataKey="sessionLength"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={"sessionLength"}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    )
}