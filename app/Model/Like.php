<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['reply_id','user_id'];

    // public function reply(){
    //     return $this->belongsTo('App\Model\Reply', 'id', 'reply_id');
    // }

    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
