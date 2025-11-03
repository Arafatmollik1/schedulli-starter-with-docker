<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Expert>
 */
class ExpertFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'specialty' => fake()->randomElement(['Dentist', 'Doctor', 'Lawyer', 'Accountant', 'Consultant', 'Therapist']),
            'bio' => fake()->paragraph(),
            'hourly_rate' => fake()->randomFloat(2, 50, 500),
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }
}
