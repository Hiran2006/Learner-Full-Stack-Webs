function isformValidate(ele) {
    if(/[0-9]$/.test(ele.id.value) && ele.pass.value != ""){
        return true;
    }
    return false;
}