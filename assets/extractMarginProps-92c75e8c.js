const c=["m","margin","mt","marginTop","mr","marginRight","mb","marginBottom","ml","marginLeft","mx","my"],a=t=>{if(!(t instanceof Object))return[{},{}];const m=Object.entries(t),[s,o]=m.reduce(([n,e],[r,i])=>c.includes(r)?[{...n,[r]:i},e]:[n,{...e,[r]:i}],[{},{}]);return[s,o]};export{a as e};
//# sourceMappingURL=extractMarginProps-92c75e8c.js.map
