<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    public function reply(){
        return $this->belongsTo('App\Model\Reply', 'id', 'reply_id');
    }

    public function user(){
        return $this->belongsTo('App\Model\User', 'id', 'user_id');
    }
}
