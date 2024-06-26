import { loginData, userData } from "../backend/data.ts";



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
}

///////////////////////////////////////////////////////
// falls frontend funktionen über Import ziehen will //
///////////////////////////////////////////////////////

export function createUser2(inputPassword, repeatPass, inputUsername, inputName, inputGender, inputAge, inputHeight, inputWeight, inputEthnicity, inputExperience, inputGymName) {
    if (inputPassword !== repeatPass) {
        alert("Passwörter stimmen nicht überein!");
        return;
    }
    if (inputUsername.length < 6 || inputUsername.length > 20) {
        alert("Benutzername muss zwischen 6 und 20 Zeichen lang sein.");
        return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(inputUsername)) {
        alert("Benutzername darf nur Buchstaben und Zahlen enthalten.");
        return;
    }
    if (loginData.some(user => user.user === inputUsername)) {
        alert("Benutzername ist bereits vergeben.");
        return;
    }
    if (inputPassword
.length < 8 || inputPassword
.length > 20) {
        alert("Passwort muss zwischen 8 und 20 Zeichen lang sein.");
        return;
    }

    const newId = loginData.length > 0 ? loginData[loginData.length - 1].id + 1 : 1;
    alert("Registrierung erfolgreich");
    loginData.push({
        id: newId,
        user: inputUsername,
        password: inputPassword

    });
    userData.push({
        "id": newId,
        "name": inputName,
        "gender": inputGender,
        "age": inputAge,
        "height": inputHeight,
        "weight": inputWeight,
        "ethnicity": inputEthnicity,
        "experience": inputExperience,
        "gymName": inputGymName,
        "avatarUrl": "",
        "progress": {
            "endurance": 0,
            "consistancy": 0,
            "strength": 0
        },
        "level": 1,
        "levelbar": 0,
        "workouts": [],
        "trainingsHistory": [],
        "achievements": [],
        "friends": []
    })
}

/*
    Funktion zum Login prüft die vorhandenen Daten mit Objekten in data.ts 
    und gibt ensprechende Nachricht zurück.
*/

export function loginUser() {
    const user = loginData.find(u => u.user === currentName.val && u.password === currentPass.val);
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
    const user = loginData.find(u => u.user === currentName && u.password === currentPass);
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

export function updateUser(idInput, nameInput, genderInput, ageInput, heightInput, weightInput, ethnicityInput, expierenceInput, gymNameInput) {
    if (!idInput) {
        alert("keine Id mitgegeben");
        return;
    }
    let userToUpdate = userData.find(user => user.id === idInput);

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
    if (ethnicityInput) {
        userToUpdate.ethnicity = ethnicityInput;
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
    const index = userData.findIndex(user => user.id === idInput);
    userData.splice(index, 1);
}

/*
    Funktion, um alle Daten eines Nutzers zu bekommen
*/
export function getSingleUserData(id) {
    return userData.find(user => user.id === id);
}