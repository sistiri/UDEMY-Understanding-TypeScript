const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')! as HTMLInputElement

const GOOGLE_API_KEY = ''
// https://developers.google.com/maps/documentation/geocoding/start#geocoding-request-and-response-latitudelongitude-lookup

function searchAddressHandler(event: Event) {
    event.preventDefault()
    const enteredAdrress = addressInput.value
    console.log(enteredAdrress)

    // send this to Google's API!
}

form.addEventListener("submit", searchAddressHandler);
