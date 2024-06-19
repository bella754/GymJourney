import { loginData } from "../backend/data.ts";



///////////////////////////////////////////////////////////////////
// TODO: Ich glaube, dass refs hier schwierig sind, die werden   //
//       hier ja nie gesetzt. ich hätte die werte eher als input // 
//       params mit reingegeben                                  //
// TODO_2: userDatabase anpassen, dass auch personalisierung     //
//         drinnen ist (+ trainingssession...)                   //
///////////////////////////////////////////////////////////////////

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
    if (loginData.some(user => user.user === currentName.val)) {
        alert("Benutzername ist bereits vergeben.");
        return;
    }
    if (currentPass.val.length < 8 || currentPass.val.length > 20) {
        alert("Passwort muss zwischen 8 und 20 Zeichen lang sein.");
        return;
    }

    const newId = loginData.length > 0 ? loginData[loginData.length - 1].id + 1 : 1;
    alert("Registrierung erfolgreich");
    loginData.push({
        id: newId,
        user: currentName.val,
        password: currentPass.val
    });
    userData.push({
        id: newId,
        name: ...
    })
}

///////////////////////////////////////////////////////
// falls frontend funktionen über Import ziehen will //
///////////////////////////////////////////////////////

export function createUser2(currentPass, repeatPass, currentName) {
    if (currentPass !== repeatPass) {
        alert("Passwörter stimmen nicht überein!");
        return;
    }
    if (currentName.length < 6 || currentName.length > 20) {
        alert("Benutzername muss zwischen 6 und 20 Zeichen lang sein.");
        return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(currentName)) {
        alert("Benutzername darf nur Buchstaben und Zahlen enthalten.");
        return;
    }
    if (userdata.some(user => user.user === currentName)) {
        alert("Benutzername ist bereits vergeben.");
        return;
    }
    if (currentPass.length < 8 || currentPass.length > 20) {
        alert("Passwort muss zwischen 8 und 20 Zeichen lang sein.");
        return;
    }

    const newId = userdata.length > 0 ? userdata[userdata.length - 1].id + 1 : 1;
    alert("Registrierung erfolgreich");
    userdata.push({
        id: newId,
        user: currentName,
        password: currentPass
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

///////////////////////////////////////////////////////
// falls frontend funktionen über Import ziehen will //
///////////////////////////////////////////////////////

export function loginUser2(currentName, currentPass) {
    const user = userdata.find(u => u.user === currentName && u.password === currentPass);
    if (user) {
        alert("Anmeldung erfolgreich!");
    } else {
        alert("Ungültiger Benutzername oder Passwort!");
    }
}


/* 
    Funktion zur Bearbeitung der persönlichen Daten eines Users 
    (keine Trainingspläne, Achievments, Progress, Level ...)
*/

export function updateUser(idInput, nameInput, genderInput, ageInput, heightInput, weightInput, expierenceInput, gymNameInput) {
    if (!idInput) {
        alert("keine Id mitgegeben");
        return;
    }
    let userToUpdate = userdata.find(user => user.id === idInput);

    if (nameInput) {
        userToUpdate.name = nameInput;
    }
    if (genderInput) {
        userToUpdate.gender = genderInput;
    }
    if (ageInput) {
        userToUpdate.age = ageInput;
    }
    if (heightInput) {
        userToUpdate.height = heightInput;
    }
    if (weightInput) {
        userToUpdate.weight = weightInput;
    }
    if (expierenceInput) {
        userToUpdate.expierence = expierenceInput;
    }
    if (gymNameInput) {
        userToUpdate.gymName = gymNameInput;
    }
}

/* 
    Funktion, um User zu löschen
*/

export function deleteUser(idInput) {
    const index = userdata.findIndex(user => user.id === idInput);
    userdata.splice(index, 1);
}