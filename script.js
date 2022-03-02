var validate = ()=>{
  var epattern =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var email = document.getElementById("ema"). value.trim();
    if( ! epattern.test(email))
    {
        formstatus = false;
        document.getElementById("ema").style.borderColor="red";
        document.getElementById("demo").innerText="Please Enter Valid Email Address";

    }else{
        // document.getElementById("demo").innerText="Please Enter Valid Email Address";
        document.getElementById("ema").style.borderColor="green";
        document.getElementById("demo").innerText="";

    }
}

 var one = (photourl) =>{
                document.getElementById("mypic").src = photourl;
            } 

            var myfun = () =>{
                var formstatus = true;
                var fname = document.getElementById("name"). value.trim();
                if(fname==""){
                    formstatus = false;
                    document.getElementById("name").style.borderColor="red";
            
                }else{
                    document.getElementById("name").style.borderColor="";
            
                }
                var epattern =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                var email = document.getElementById("email"). value.trim();
                if( ! epattern.test(email))
                {
                    formstatus = false;
                    document.getElementById("email").style.borderColor="red";
            
                }else{
                    document.getElementById("email").style.borderColor="";
            
                }
                var address = document.getElementById("message"). value.trim();
                if( address.length<30 ){
                    formstatus = false;
                    document.getElementById("message").style.borderColor="red";
            
                }else{
                    document.getElementById("message").style.borderColor="";
            
                }
        
            }


