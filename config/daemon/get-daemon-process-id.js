// @flow

import psList from 'ps-list';

export const getDaemonProcessId = (zcashPath?: string) => {

  psList().then(res=>{
    let process=res.find((prc)=>{ return prc.name=='arrowd.exe'})
    if(process){
      return process.pid

    }else{
      return null;
    }
  })
};
