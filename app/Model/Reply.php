<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $fillable = ['body', 'question_id', 'user_id'];
    
    public function like(){
        return $this->hasMany('App\Model\Like', 'reply_id', 'id');
    }

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }

    public function question(){
        return $this->belongsTo('App\Model\Question', 'question_id', 'id');
    }
}
