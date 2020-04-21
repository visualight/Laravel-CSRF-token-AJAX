<?php

Route::get('/refresh-csrf', function(){
  return csrf_token();
});
