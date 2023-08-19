import { FormControl } from "@angular/forms";

export interface Auth {
    username: FormControl<string | null>;
    password: FormControl<string | null>
}