// main
// hsl(131, 60%, 33%)
const h = 136;
const s = 70;

export const light = {
  's0': `hsl(${h}, ${s}%, 100%)`,
  's1': `hsl(${h}, ${s}%, 90%)`,
  's2': `hsl(${h}, ${s}%, 80%)`,
  's3': `hsl(${h}, ${s}%, 70%)`,
  's4': `hsl(${h}, ${s}%, 60%)`,
  's5': `hsl(${h}, ${s}%, 50%)`,
  's6': `hsl(${h}, ${s}%, 40%)`,
  's7': `hsl(${h}, ${s}%, 30%)`,
  's8': `hsl(${h}, ${s}%, 20%)`,
  's9': `hsl(${h}, ${s}%, 10%)`,
  's10': `hsl(${h}, ${s}%, 0%)`,
};


export const dark: typeof light = {
  's0': `hsl(${h}, ${s}%, 0%)`,
  's1': `hsl(${h}, ${s}%, 10%)`,
  's2': `hsl(${h}, ${s}%, 20%)`,
  's3': `hsl(${h}, ${s}%, 30%)`,
  's4': `hsl(${h}, ${s}%, 40%)`,
  's5': `hsl(${h}, ${s}%, 50%)`,
  's6': `hsl(${h}, ${s}%, 60%)`,
  's7': `hsl(${h}, ${s}%, 70%)`,
  's8': `hsl(${h}, ${s}%, 80%)`,
  's9': `hsl(${h}, ${s}%, 90%)`,
  's10': `hsl(${h}, ${s}%, 100%)`,
};
