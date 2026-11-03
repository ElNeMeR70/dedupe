#!/usr/bin/env node
// dedupe - zero-dependency developer tool
let s="";process.stdin.on("data",d=>s+=d.toString().replace(/\uFEFF/g,"")).on("end",()=>console.log([...new Set(s.split(/\r?\n/).filter(x=>x!==""))].join("\n")))
