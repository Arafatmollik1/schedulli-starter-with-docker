<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateExpertRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $expertId = $this->route('expert')?->id ?? $this->route('expert');

        return [
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'email' => ['sometimes', 'required', 'email', 'unique:experts,email,'.$expertId],
            'phone' => ['nullable', 'string', 'max:255'],
            'specialty' => ['sometimes', 'required', 'string', 'max:255'],
            'bio' => ['nullable', 'string'],
            'hourly_rate' => ['sometimes', 'required', 'numeric', 'min:0'],
            'status' => ['sometimes', 'in:active,inactive'],
        ];
    }
}
