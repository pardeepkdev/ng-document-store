import { FormControl } from "@angular/forms";

export interface Auth {
    email: FormControl<string | null>;
    password: FormControl<string | null>
}