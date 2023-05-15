export function addToLS(inputValue) {
    if (!localStorage.getItem('lastVINs')) {
        localStorage.setItem('lastVINs', JSON.stringify([inputValue]));
    } else {
        const VINs = JSON.parse(localStorage.getItem('lastVINs'));
        if (VINs.length > 4) {
            VINs.splice(0, 1);
            VINs.push(inputValue);
        } else {
            VINs.push(inputValue);
        }
        localStorage.setItem('lastVINs', JSON.stringify(VINs));
    }
}
