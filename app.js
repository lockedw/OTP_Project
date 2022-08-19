const inputs = document.querySelector('.otp-field input')

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener('paste', handleOnPasteOtp);
    input.addEventListener('keyup', handleOtp);

})

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData('text')
    const value = data.split('');
    if(value.length == inputs.length){
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }

}

function