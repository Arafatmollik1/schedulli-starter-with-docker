<?php

namespace Database\Seeders;

use App\Models\Appointment;
use App\Models\Customer;
use App\Models\Expert;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $experts = Expert::all();
        $customers = Customer::all();

        foreach ($customers as $customer) {
            Appointment::factory()->count(3)->create([
                'customer_id' => $customer->id,
                'expert_id' => $experts->random()->id,
            ]);
        }
    }
}
