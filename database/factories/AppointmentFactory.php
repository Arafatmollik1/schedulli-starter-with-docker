<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'expert_id' => \App\Models\Expert::factory(),
            'customer_id' => \App\Models\Customer::factory(),
            'scheduled_at' => fake()->dateTimeBetween('now', '+1 year'),
            'duration_minutes' => fake()->randomElement([30, 60, 90, 120]),
            'status' => fake()->randomElement(['scheduled', 'completed', 'cancelled']),
            'notes' => fake()->optional()->sentence(),
        ];
    }
}
