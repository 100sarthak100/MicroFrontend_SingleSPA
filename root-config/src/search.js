import { BehaviorSubject } from "rxjs";

export const search$ = new BehaviorSubject({
    product: localStorage.getItem("product"),
    error: false,
    pending: false,
});