import { Component, OnInit, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizza-editor",
  templateUrl: "./pizza-editor.component.html",
  styleUrls: ["./pizza-editor.component.css"],
})
export class PizzaEditorComponent implements OnInit {
  public form: FormGroup;

  @Input() pizza: Pizza | null;
  @Output() onSave = new EventEmitter<Pizza>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      photoUrl: [],
      description: ["", Validators.required],
    });

    if (this.pizza) {
      this.form.patchValue(this.pizza); //to w momencie kliknięcia edit
    }

    // https://qph.fs.quoracdn.net/main-qimg-052354ea5543ffd45b03eab59aac8457.webp
    // this.form.valueChanges.subscribe((x) => console.log("Form", x));
    // this.form.value; <- tutaj jest cały obiekt pizzy
    // this.form.valid  <-- true if valid
  }

  onSaveHandler() {
    this.onSave.emit(this.form.value);
    console.log(this.form.value);
  }
}
