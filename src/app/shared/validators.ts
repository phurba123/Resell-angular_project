import { FormControl } from "@angular/forms";

export function emailValidator(email: FormControl): string {
    switch (true) {
        case email.hasError('required'):
            return "Email is required";

        case email.hasError('email'):
            return "Not a valid email";

        default:
            return ""
    }
}