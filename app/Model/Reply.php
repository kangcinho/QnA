<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    public function like(){
        return $this->hasMany('App\Model\Like', 'reply_id', 'id');
        // return $this->hasMany('App\Model\Like', 'id', 'reply_id');
    }

    public function user(){
        return $this->belongsTo('App\Model\User', 'id', 'user_id');
    }

    public function question(){
        return $this->belongsTo('App\Model\Question', 'id', 'question_id');
    }
}
