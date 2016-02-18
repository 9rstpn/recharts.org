export default {
  name: 'XAxis',
  props: [
    {
      name: 'hide',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the axis do not display in the chart.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of data displayed in the axis.',
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The unique id of x-axis.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of axis which is usually calculated internally.',
    }, {
      name: 'hight',
      type: 'Number',
      defaultVal: '30',
      isOptional: false,
      desc: 'The height of axis, which can be setted by user.',
    }, {
      name: 'orientation',
      type: `'bottom' , 'top'`,
      defaultVal: '\'bottom\'',
      isOptional: false,
      desc: 'The orientation of axis',
    }, {
      name: 'type',
      type: '\'number\' , \'category\'',
      defaultVal: '\'category\'',
      isOptional: false,
      desc: 'The type of axis.',
    }, {
      name: 'tickCount',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The number of axis ticks.',
    }, {
      name: 'domain',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'Specify the domain of axis when the axis is a number axis. The length of domain should be 2, and we will validate the values in domain.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of tick.',
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'Set the values of axis ticks manually.',
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data displayed in the axis.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data displayed in the axis.',
    },
  ],
  examples: [

  ]
};
