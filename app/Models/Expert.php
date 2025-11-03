<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Expert extends Model
{
    /** @use HasFactory<\Database\Factories\ExpertFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'specialty',
        'bio',
        'hourly_rate',
        'status',
    ];

    /**
     * Get the appointments for the expert.
     */
    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class);
    }
}
