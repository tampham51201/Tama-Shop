//đói tượng 
function Validator(options) {

    //thực hiện validate
    function Validate(inputElement,rule){
        var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);           
         if(errorMessage)
             {
             errorElement.innerText=errorMessage;
             inputElement.parentElement.classList.add('invalid');
                }
         else
         {
             errorElement.innerText='';
             inputElement.parentElement.classList.remove('invalid');
         }
        
    }
//Lấy Element form cần Validate
    var formElement=document.querySelector(options.form);
    if(formElement)
    {
        options.rules.forEach(function(rule) {
            var inputElement=formElement.querySelector(rule.selector);
            
            if(inputElement)
            {
               
                //xử lý blur khỏi input
                inputElement.onblur=function(){
                    Validate(inputElement,rule);
                }
                //xử lý mỗi khỉ người dùng nhập vào input
                inputElement.oninput=function(){
                    var errorElement=inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
            
        });
    }

}
Validator.isRequied= function (selector) {
   return{
    selector :selector,
    test : function(value){
        return value.trim() ? undefined : 'Vui lòng nhập trường này';
    }
   } ;

}
Validator.isEmail= function(selector){
    return{
        selector :selector,
        test : function(value){
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined:'Trường này phải là email';
    
        }
    } ;
}
Validator.minLength= function(selector,min){
    return{
        selector :selector,
        test : function(value){
            return value.length >= min ? undefined:`Phải lơn hơn ${min} ký tự`
    
        }
    } ;
}
Validator.passwordConfirm = function(selector,getConfirmValue,message){
    return{
        selector :selector,
        test : function(value){
            return value === getConfirmValue() ? undefined: message || 'Nhập lại không chính xác'
    
        }
    } ;
}