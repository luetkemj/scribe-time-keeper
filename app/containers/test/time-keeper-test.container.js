import React from 'react';

import TimeKeeper from '../../components/time-keeper/time-keeper.component';

export default function TimeKeeperTestContainer() {
  return (
    <div>
      <TimeKeeper
        day={1}
        time={{
          hours: 1,
          minutes: 2,
          seconds: 1,
        }}
        sky={'night'}
        rotation={0}
      />
    </div>
  );
}
