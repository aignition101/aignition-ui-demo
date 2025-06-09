// overview.js

export const ahuOverviewData = [
  {
    id: 'AHU1', fans: 3, impedance: 7.008e-5,
    speeds: [
      { percent: '40%', rpm: 992, pressure: 282, flow: 6018, power: 1029 },
      { percent: '60%', rpm: 1488, pressure: 635, flow: 9027, power: 3003 },
      { percent: '80%', rpm: 1984, pressure: 1128, flow: 12036, power: 6786 },
      { percent: '100%', rpm: 2473, pressure: 1745, flow: 15045, power: 12951 }
    ],
    initial: {
      speedRatio: '51%', hours: 38126,
      newFan: '無', warningFan: '無', warningReason: '無',
      errorFan: '無', errorReason: '無'
    }
  },
  {
    id: 'AHU2', fans: 3, impedance: 9.518e-6,
    speeds: [
      { percent: '40%', rpm: 994, pressure: 160, flow: 12300, power: 1083 },
      { percent: '60%', rpm: 1488, pressure: 359, flow: 18412.88, power: 3132 },
      { percent: '80%', rpm: 1984, pressure: 637, flow: 24550.5, power: 7044 },
      { percent: '99%', rpm: 2457, pressure: 990, flow: 30687, power: 13650 }
    ],
    initial: {
      speedRatio: '59%', hours: 38298,
      newFan: '無', warningFan: '無', warningReason: '無',
      errorFan: '無', errorReason: '無'
    }
  },
  {
    id: 'AHU3', fans: 5, impedance: 1.818e-5,
    speeds: [
      { percent: '40%', rpm: 992, pressure: 212, flow: 17075, power: 1850 },
      { percent: '60%', rpm: 1488, pressure: 477, flow: 25612.5, power: 5305 },
      { percent: '80%', rpm: 1984, pressure: 848, flow: 34150, power: 12015 },
      { percent: '99%', rpm: 2463, pressure: 1315, flow: 42690, power: 23205 }
    ],
    initial: {
      speedRatio: '55%', hours: 56912,
      newFan: '無', warningFan: '4號風機', warningReason: '功率模塊過溫',
      errorFan: '無', errorReason: '無'
    }
  },
  {
    id: 'AHU4', fans: 5, impedance: 1.114e-5,
    speeds: [
      { percent: '40%', rpm: 992, pressure: 173, flow: 19700, power: 1835 },
      { percent: '60%', rpm: 1488, pressure: 389, flow: 29550, power: 5325 },
      { percent: '80%', rpm: 1984, pressure: 692, flow: 39400, power: 11960 },
      { percent: '99%', rpm: 2453, pressure: 1070, flow: 49250, power: 23210 }
    ],
    initial: {
      speedRatio: '57%', hours: 56938,
      newFan: '2號風機', warningFan: '無', warningReason: '無',
      errorFan: '無', errorReason: '無'
    }
  },
  {
    id: 'AHU5', fans: 2, impedance: 4.847e-6,
    speeds: [
      { percent: '40%', rpm: 992, pressure: 103, flow: 9220, power: 646 },
      { percent: '60%', rpm: 1488, pressure: 232, flow: 13830, power: 1866 },
      { percent: '80%', rpm: 1984, pressure: 412, flow: 18440, power: 4146 },
      { percent: '100%', rpm: 2468, pressure: 685, flow: 23040, power: 8316 }
    ],
    initial: {
      speedRatio: '66%', hours: 37951,
      newFan: '無', warningFan: '無', warningReason: '無',
      errorFan: '無', errorReason: '無'
    }
  },
  {
    id: 'AHU6', fans: 2, impedance: 2.954e-5,
    speeds: [
      { percent: '40%', rpm: 992, pressure: 245, flow: 5760, power: 728 },
      { percent: '60%', rpm: 1488, pressure: 551, flow: 8640, power: 2138 },
      { percent: '80%', rpm: 1984, pressure: 980, flow: 11520, power: 4828 },
      { percent: '99%', rpm: 2460, pressure: 1510, flow: 14400, power: 9230 }
    ],
    initial: {
      speedRatio: '59%', hours: 37966,
      newFan: '1號風機', warningFan: '無', warningReason: '無',
      errorFan: '無', errorReason: '無'
    }
  }
];

