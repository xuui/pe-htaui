(function($){
  //$('#wpinfo').append("<p>jQuery !!!</p>");
  //$('#wpinfo').append("<p>UserAgent: "+ navigator.userAgent + "</p>");
  //$('#wpinfo').append("<p>Version: "+ navigator.appVersion + "</p>");
  //$('#wpinfo').append("<p>: "+ navigator.appName+navigator.appVersion + "</p>");
  //$('#wpinfo').append(navigator.appName+navigator.appVersion);

  $('#shell-Exit').click(function(e){
    self.close();
  });
  $('#shell-Reboot').click(function(e){
    pe_run('wpeutil Reboot');
  });
  $('#shell-Shutdown').click(function(e){
    pe_run('wpeutil Shutdown');
  });
  
  $('#shell-taskmgr').click(function(e){
    pe_run('taskmgr');
  });
  $('#shell-cmd').click(function(e){
    pe_run('cmd');
  });
  $('#shell-notepad').click(function(e){
    pe_run('notepad');
  });
  
  $('#shell-cmde').click(function(e){
    pe_run('cmd /?');
  });
  $('#shell-taskmgre').click(function(e){
    pe_exec('taskmgr');
  });

  $('#shell-install').click(function(e){
    //pe_exec('dism /?');
  });





/* SHELL Function */
function wshell(){
  try{return new ActiveXObject("WScript.Shell");
  }catch(e){
    alert("不支持 [WScript.Shell]");
    return null;
  }
}
function pe_exec(cmd){
  var oExec;
  if(cmd!=''){
    try{oExec=wshell().Exec(cmd);
    }catch(e){
      alert("[" + cmd + "]" + e.description);
      return false;
    }
  }
}
function pe_run(cmd){
  if(cmd!=''){
    wshell().run(cmd);
  }
}
/* SHELL Function End */
})(jQuery);