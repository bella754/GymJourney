import { userdata } from "../backend/data.ts";

export const currentName = $$("");
export const currentPass = $$("");
export const repeatPass = $$("");

/*
    Funktion zur Erstellung eines neuen Users mit Bedingungen
    und vergeben vom neuen ID. Anschließend werden Daten an data.ts
    gepusht.
*/


export function createUser() {
    if (currentPass.val !== repeatPass.val) {
        alert("Passwörter stimmen nicht überein!");
        return;
    }
    if (currentName.val.length < 6 || currentName.val.length > 20) {
        alert("Benutzername muss zwischen 6 und 20 Zeichen lang sein.");
        return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(currentName.val)) {
        alert("Benutzername darf nur Buchstaben und Zahlen enthalten.");
        return;
    }
    if (userdata.some(user => user.user === currentName.val)) {
        alert("Benutzername ist bereits vergeben.");
        return;
    }
    if (currentPass.val.length < 8 || currentPass.val.length > 20) {
        alert("Passwort muss zwischen 8 und 20 Zeichen lang sein.");
        return;
    }

    const newId = userdata.length > 0 ? userdata[userdata.length - 1].id + 1 : 1;
    alert("Registrierung erfolgreich");
    userdata.push({
        user: currentName.val,
        password: currentPass.val,
        id: newId,
    });
}

/*
    Funktion zum Login prüft die vorhandenen Daten mit Objekten in data.ts 
    und gibt ensprechende Nachricht zurück.
*/

export function loginUser() {
    const user = userdata.find(u => u.user === currentName.val && u.password === currentPass.val);
    if (user) {
        alert("Anmeldung erfolgreich!");
    } else {
        alert("Ungültiger Benutzername oder Passwort!");
    }
}