const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.userInfo());



/* OUTPUT WILL BE 

darwin
x64
[
  {
    model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 689690, nice: 0, sys: 620590, idle: 3066450, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 405980, nice: 0, sys: 235660, idle: 3734190, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 704390, nice: 0, sys: 470410, idle: 3201030, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
    speed: 1600,
    times: { user: 370640, nice: 0, sys: 204860, idle: 3800340, irq: 0 }
  }
]
751763456
8589934592
/Users/preeti
{
  uid: 501,
  gid: 20,
  username: 'preeti',
  homedir: '/Users/preeti',
  shell: '/bin/bash'
} */
