// @flow

import psList from 'ps-list';

export const getDaemonProcessId = async () => {
  return new Promise((resolve, reject) => {
    psList().then(res=>{
      const process=res.find((prc)=>{ return prc.name.includes('arrowd')})
      if(process){
        resolve(process.pid)

      }else{
        resolve(null);
      }
    })
  })

};
