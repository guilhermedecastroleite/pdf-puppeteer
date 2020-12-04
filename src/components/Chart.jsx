import React from 'react';

import PropTypes from 'prop-types';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const CustomBarLabel = ({ isPercentage, labelProps, ...props }) => {
  const {
    x, y, value, width, height,
  } = props;

  const xPosition = width >= 0 ? x + width + 4 : x + width - ((value === -100 || value % 1 !== 0) ? 27 : 20);
  const yPosition = y + height / 2 + 6;

  return (
    <text
      dy={-4}
      x={xPosition}
      y={yPosition}
      textAnchor='right'
      fontSize={12}
      fontWeight='600'
      fill='#4D5365'
      fontFamily='Helvetica'
      {...labelProps}
    >
      {isPercentage ? `${value.toFixed(1).replace(/\.0$/, '')}%` : value.toFixed(1).replace(/\.0$/, '')}
    </text>
  );
};

CustomBarLabel.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPercentage: PropTypes.bool,
  labelProps: PropTypes.object,
};

CustomBarLabel.defaultProps = {
  isPercentage: false,
  labelProps: {},
};

const Chart = ({
  data,
  range,
  width,
  height,
  barSize,
  barProps,
  xAxisProps,
  yAxisProps,
  barChartProps,
  labelProps,
  isPercentage,
  legend,
  children,
}) => {
  const { min, max, step } = range;

  const ticks = (max - min) / step + 2;

  const addLines = (start, end, arrayStep = 1) => {
    const len = Math.floor((end - start) / arrayStep) + 1;
    return Array(len).fill().map((_, idx) => start + (idx * arrayStep));
  };

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart
        data={data}
        margin={{
          top: 0, right: 0, left: 10, bottom: 0,
        }}
        layout='vertical'
        barSize={barSize}
        {...barChartProps}
      >
        <XAxis
          type='number'
          tickCount={ticks}
          orientation='top'
          domain={[min, max]}
          axisLine={false}
          tickLine={false}
          tick={{
            fill: '#6F798B',
            fontSize: 14,
            fontFamily: 'Helvetica',
          }}
          {...xAxisProps}
        />
        <YAxis
          dx={-16}
          type='category'
          dataKey='name'
          axisLine={false}
          tickLine={false}
          tick={{
            fill: '#4D5365',
            fontSize: 16,
            lineHeight: 22,
            fontFamily: 'Helvetica',
          }}
          interval={0}
          {...yAxisProps}
        />
        {addLines(min, max, step).map((item) => (
          <ReferenceLine key={item} x={item} style={{ fill: '#CDD2DB' }} />
        ))}
        <Bar
          dataKey='value'
          fill='#A35ADA'
          label={(props) => <CustomBarLabel isPercentage={isPercentage} labelProps={labelProps} {...props} />}
          {...barProps}
        />
        {children}
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
  range: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
  }),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  barSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  barProps: PropTypes.object,
  xAxisProps: PropTypes.object,
  yAxisProps: PropTypes.object,
  barChartProps: PropTypes.object,
  labelProps: PropTypes.object,
  isPercentage: PropTypes.bool,
  legend: PropTypes.bool,
  children: PropTypes.any,
};

Chart.defaultProps = {
  data: [{ name: null, value: null }],
  range: {
    min: 0,
    max: 100,
    step: 20,
  },
  width: '100%',
  height: 254,
  barSize: 22,
  barProps: {},
  xAxisProps: {},
  yAxisProps: {},
  barChartProps: {},
  labelProps: {},
  isPercentage: false,
  legend: false,
  children: null,
};

export default Chart;
